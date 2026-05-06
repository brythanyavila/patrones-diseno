/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from "../helpers/colors.ts";

class Projector {
    turnOn(): void {
        console.log('Encendiendo proyector.');
    }

    turnOff(): void {
        console.log('Apagando proyector.');
    }
}

class SoundSystem {
    on(): void {
        console.log('Encendiendo sistema de sonido.');
    }

    off(): void {
        console.log('Apagando sistema de sonido.');
    }
}

class VideoPlayer {
    on(): void {
        console.log('Encendiendo reproductor de video.');
    }

    play(movie: string): void {
        console.log(`Reproduciendo %c${movie}`, COLORS.blue);
    }

    stop(): void {
        console.log('Deteniendo video.');
    }

    off(): void {
        console.log('Apagando reproductor de video.');
    }
}

class PopcornMaker {
    on(): void {
        console.log('Encendiendo máquina de palomitas.');
    }

    poppingPopcorn(): void {
        console.log('Haciendo palomitas de maíz.');
    }

    turnOffPoppingPopcorn(): void {
        console.log('Apagando máquina de palomitas.');
    }
}

interface HomeTheaterFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({
        projector,
        soundSystem,
        videoPlayer,
        popcornMaker
    }: HomeTheaterFacadeOptions) {
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie(movie: string): void {
        console.log('%cPreparando para ver una película...', COLORS.yellow);
        this.popcornMaker.on();
        this.popcornMaker.poppingPopcorn();
        this.projector.turnOn();
        this.soundSystem.on();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);

        console.log('%c¡Disfruta de la película!', COLORS.green);
    
    }
    
    endMovie(): void {
        console.log('%cPreparando para detener la película...', COLORS.yellow);
        this.videoPlayer.stop();
        this.videoPlayer.off();
        this.soundSystem.off();
        this.projector.turnOff();
        this.popcornMaker.turnOffPoppingPopcorn();

        console.log('%c¡Sistema apagado!', COLORS.green);
    }
}

function main(){
    const projector = new Projector();
    const soundSystem = new SoundSystem();
    const videoPlayer = new VideoPlayer();
    const popcornMaker = new PopcornMaker();

    const homeTheater = new HomeTheaterFacade({
        projector,
        soundSystem,
        videoPlayer,
        popcornMaker
    });

    homeTheater.watchMovie('Inception');
    console.log('\n...Película en progreso...\n');
    homeTheater.endMovie();
}

main();
