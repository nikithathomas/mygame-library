import { Component, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'inventory-tab',
  styleUrl: 'inventory-tab.scss',
  shadow: true,
})
export class InventoryTab {
  @Prop() tabText: string = '';
  @Prop() selected: boolean = false;

  render() {
    return (
      <Fragment>
        <inventory-button
          selected={this.selected}
          text={this.tabText.toUpperCase()} // Forces the crisp NMS casing look
          variant="header"
        ></inventory-button>
      </Fragment>
    );
  }
}
