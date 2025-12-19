/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
    showDetails(indent?: string): void;
}

class File implements FileSystemComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}- Archivo: ${this.name}`);
    }
}

class Folder implements FileSystemComponent {
    private name: string;
    private contents: FileSystemComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: FileSystemComponent): void {
        this.contents.push(component);
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}+ Carpeta: ${this.name}`);
        this.contents.forEach(component => component.showDetails(indent + '  '));
    }
}

function main () {
    const file1 = new File('documento.txt');
    const file2 = new File('documento1.txt');
    const file3 = new File('documento2.txt');
    const file4 = new File('documento3.txt');

    const folder1 = new Folder('Carpeta 1');
    folder1.add(file1);
    folder1.add(file2);

    const folder2 = new Folder('Carpeta 2');
    folder2.add(file3);

    const folder3 = new Folder('Carpeta 3');
    folder3.add(file4);
    folder2.add(folder3);
    
    const folder4 = new Folder('Carpeta 4');
    folder2.add(folder4);

    const rootFolder = new Folder('Carpeta root');
    rootFolder.add(folder1);
    rootFolder.add(folder2);

    rootFolder.showDetails();
}

main();