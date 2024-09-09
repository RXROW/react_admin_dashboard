import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent  
     
        id='gridcomp'
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        contextMenuItems={contextMenuItems}
        editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  );
}

export default Orders;
