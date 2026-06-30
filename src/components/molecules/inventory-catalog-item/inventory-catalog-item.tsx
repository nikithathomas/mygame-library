import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'inventory-catalog-item',
  styleUrl: 'inventory-catalog-item.scss',
  shadow: true,
})
export class InventoryCatalogItem {
  @Prop() itemName: string = '';
  @Prop() source: string = '';
  @Prop() outline: boolean = false;
  render() {
    return (
      <div class="catalog-item">
        <inventory-icon src={this.source} alt={this.itemName} outline={this.outline}></inventory-icon>
        <span class="catalog-item__label">{this.itemName}</span>
      </div>
    );
  }
}
