import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cifrar',
  templateUrl: './cifrar.component.html',
  styleUrls: ['./cifrar.component.css']
})
export class CifrarComponent implements OnInit {

  enctexto: string;
  destexto: string;
  encPass: string;
  desPass: string;
  textoEncriptado: string;
  textoDesencriptado: string;
  secretKey: string = "lbed3614"
  constructor() { }

  ngOnInit(): void {

  }

  convertirTexto(conversion: string) {
    console.log(this.enctexto);
    if (conversion === 'encriptar') {
      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(),this.secretKey.trim()).toString();
    } else {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(),this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }
}

}
