import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  Page,
  Search,
  ColumnDirective,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

function Employees() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        width={'auto'}
        editSettings={{
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search , Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Employees;
