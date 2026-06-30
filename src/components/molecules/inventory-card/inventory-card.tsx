import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'inventory-card',
  styleUrl: 'inventory-card.scss',
  shadow: true,
})
export class InventoryCard {
  @Prop() slotLabel: string = '';
  @Prop() source: string = '';
  render() {
    return (
      <div class="card">
        <inventory-icon src={this.source} alt={this.slotLabel} outline={false}></inventory-icon>
        <p class="card__text">{this.slotLabel}</p>
      </div>
    );
  }
}
