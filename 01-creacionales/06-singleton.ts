/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";

class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('%cLas pelotas del Dragón han sido creadas!', COLORS.green);
        }
        return DragonBalls.instance;
    }

    public collectBall(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`%cHas recogido una esfera del dragón. Total: ${this.ballsCollected}`, COLORS.blue);
            return;
        }

        console.log('%c¡Ya tienes las 7 esferas del dragón!', COLORS.yellow);
    }

    public summonShenlong(): void {
        if (this.ballsCollected === 7) {
            console.log('%c¡Has invocado al dragón Shenlong!', COLORS.purple);
            this.ballsCollected = 0; // Reset after summoning
            return;
        }

        console.log(`\n%cNecesitas 7 esferas del dragón para invocar a Shenlong. Actualmente tienes: ${this.ballsCollected}\n`, COLORS.red);
    }
}

function main() {
    const gokuDragonBalls = DragonBalls.getInstance();

    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall(); 
    gokuDragonBalls.collectBall();

    gokuDragonBalls.summonShenlong();

    const vegetaDragonBalls = DragonBalls.getInstance();

    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall(); 
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonBalls.summonShenlong();

    vegetaDragonBalls.summonShenlong();
    
    
}

main();