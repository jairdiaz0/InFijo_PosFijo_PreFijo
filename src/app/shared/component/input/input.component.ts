import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { handleKeydown } from './tools/handleKey';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() $data?: EventEmitter<string>;
  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      inputInfijo: new FormControl('', [])
    });
  }

  /**
   * Toma un evento y un control de formulario como parámetros, y personaliza la entrada de datos del usuario.
   * @param {any} event - evento
   */
  keyDown(event: any) {
    const { inputInfijo } = this.form.controls;
    handleKeydown(event, inputInfijo);
  }

  /**
   * La función envía los datos de la entrada al componente principal.
   */
  sendData() {
    const { inputInfijo } = this.form.controls;
    if (this.$data) {
      this.$data.emit(inputInfijo.value);
    }
  }
}
