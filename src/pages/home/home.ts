import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  url: any;
  directorios: any;

  constructor(public navCtrl: NavController, private file: File, private platform: Platform) {
    
    this.platform.ready().then(() => {
      
      
      this.file.listDir(this.file.externalRootDirectory, '').then(
        (list) => {
          console.log(list);
          this.directorios = list;
        }
      ).catch(e => console.log(e));


    }).catch(e => console.log(e));

  }

  abrir(directorio){
    console.log(directorio.fullPath)
    this.file.listDir(this.file.externalRootDirectory, directorio.fullPath.substring(1, directorio.fullPath.length)).then(
      (list) => {
        console.log(list);
        this.directorios = list;
      }
    ).catch(e => console.log(e));
  }

  retroceder(){
    console.log(this.file.externalRootDirectory)
    this.file.listDir(this.file.externalRootDirectory, '').then(
      (list) => {
        console.log(list);
        this.directorios = list;
      }
    ).catch(e => console.log(e));

  }

}
