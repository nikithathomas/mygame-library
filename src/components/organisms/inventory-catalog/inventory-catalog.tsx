import { Component, Prop, h } from '@stencil/core';

type CatalogItem = {
  name: string;
  source: string;
  outline?: boolean;
};

@Component({
  tag: 'inventory-catalog',
  styleUrl: 'inventory-catalog.scss',
  shadow: true,
})

export class InventoryCatalog {
  @Prop() catalogItems: CatalogItem[] = [];

  render() {
    return (
      <ul>
        {this.catalogItems.map(item => {
          return (
            <li>
              <inventory-catalog-item itemName={item.name} source={item.source} outline={item.outline}></inventory-catalog-item>
            </li>
          );
        })}
      </ul>
    );
  }
}
