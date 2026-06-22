import { Component, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'inventory-icon',
  styleUrl: 'inventory-icon.scss',
  shadow: true,
})
export class InventoryIcon {
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Prop() outline: boolean = false;

  render() {
    return (
      <Fragment>
        {this.outline ? <span class="icon__locked">?</span> : 
        <img src={this.src} alt={this.alt} class="icon__image"/>}
      </Fragment>
    );
  }
}
