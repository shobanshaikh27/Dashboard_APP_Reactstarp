import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { DataTable } from "./DataTable";
import { customerColumns,supplierColumns } from "./Columns";
import './MvcTable.css';

export default function InvoiceTable() {
    const [activeTab, setActiveTab] = useState("customer");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const customer = [
        {
          customer: "John Doe",
          amount: 5000
        },
        {
          customer: "Jane Smith",
          amount: 8000
        },
        {
          customer: "Michael Johnson",
          amount: 3000
        },
        {
          customer: "Emily Davis",
          amount: 6000
        },
        {
          customer: "David Brown",
          amount: 7000
        },
        {
          customer: "Sarah Wilson",
          amount: 4000
        },
        {
          customer: "Robert Taylor",
          amount: 9000
        },
        {
          customer: "Jennifer Martinez",
          amount: 4500
        },
        {
          customer: "Christopher Anderson",
          amount: 5500
        },
        {
          customer: "Amanda Thomas",
          amount: 8500
        }
      ];
    
      const supplier = [
        {
          supplier: "ABC Supplier",
          inv_count: 10
        },
        {
          supplier: "XYZ Company",
          inv_count: 5
        },
        {
          supplier: "EFG Corporation",
          inv_count: 8
        },
        {
          supplier: "LMN Enterprises",
          inv_count: 12
        },
        {
          supplier: "PQR Ltd.",
          inv_count: 7
        },
        {
          supplier: "UVW Industries",
          inv_count: 9
        },
        {
          supplier: "STU Partners",
          inv_count: 6
        },
        {
          supplier: "RST Services",
          inv_count: 11
        },
        {
          supplier: "MNO Solutions",
          inv_count: 14
        },
        {
          supplier: "GHI Group",
          inv_count: 3
        }
      ];

    return (
        <section className="overflow-container">
        <Nav tabs className="nav">
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'customer' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('customer')}
            >
              Customer
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'supplier' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('supplier')}
            >
              Supplier
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="tab-content">
          <TabPane tabId="customer">
            <DataTable columns={customerColumns} data={customer} heading="Most Valued Customer" />
          </TabPane>
          <TabPane tabId="supplier">
            <DataTable columns={supplierColumns} data={supplier} heading="Most Valued Supplier" />
          </TabPane>
        </TabContent>
      </section>
    );
}
