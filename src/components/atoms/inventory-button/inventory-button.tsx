import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'inventory-button',
  styleUrl: 'inventory-button.scss',
  shadow: true,
})
export class InventoryButton {
  @Prop() text: string = '';
  @Prop() variant: string = '';
  @Prop() selected: boolean = false;

  render() {
    return (
      <button
       class={{
            'tab-button': true,
            [`tab-button--${this.variant}`]: true,
            'tab-button--selected': this.selected
          }}
      >
        {this.text}
      </button>
    );
  }
}
