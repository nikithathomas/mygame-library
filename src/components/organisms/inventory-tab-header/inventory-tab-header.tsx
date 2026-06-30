import { Component, Prop, State, h } from '@stencil/core';

type tab = {
  id: number;
  name: string;
};

@Component({
  tag: 'inventory-tab-header',
  styleUrl: 'inventory-tab-header.scss',
  shadow: true,
})
export class InventoryTabHeader {
  @Prop() tabs: tab[] = [];
  @State() selectedTab: tab = this.tabs[0];

  
  render() {
    return (
      <ul>
        {this.tabs.map(tab => {
          return <li>{tab.name}</li>;
        })}
      </ul>
    );
  }
}
