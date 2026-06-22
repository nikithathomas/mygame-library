import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'inventory-icon',
  styleUrl: 'inventory-icon.scss',
  shadow: true,
})
export class InventoryIcon {
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Prop() glow: string = '';
  @Prop() outline: boolean = false;

  render() {
    return (
      <div
        class={{
          'icon': true,
          'icon--outline': this.outline,
          [`icon--glow-${this.glow}`]: !this.outline,
        }}
      >
        {this.outline ? <span class="icon__locked">?</span> : 
        <img src={this.src} alt={this.alt} class="icon__image"/>}
      </div>
    );
  }
}
