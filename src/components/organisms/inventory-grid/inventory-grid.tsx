import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'inventory-grid',
    styleUrl: 'inventory-grid.scss',
    shadow: true,
})

export class InventoryGrid {
    @Prop() gridData: any[] = [];
    render() {
        return (
            <div class="grid">
                {this.gridData.map((item, index) => (
                    <inventory-card slotLabel={item.slotLabel} source={item.source} key={index}>
                    </inventory-card>
                ))}
            </div>
        );
    }
}