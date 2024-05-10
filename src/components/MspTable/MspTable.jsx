import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { DataTable } from "./DataTable";
import { soldColumns, purchasedColumns } from './Columns';
import './MspTable.css';

export default function InvoiceTable() {
    const [activeTab, setActiveTab] = useState("sold");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const soldData = [
        {
          item: "Product1",
          stockOnHand: 100
        },
        {
          item: "Product2",
          stockOnHand: 50
        },
        {
          item: "Product3",
          stockOnHand: 75
        },
        {
          item: "Product4",
          stockOnHand: 120
        },
        {
          item: "Product5",
          stockOnHand: 80
        },
        {
          item: "Product6",
          stockOnHand: 60
        },
        {
          item: "Product7",
          stockOnHand: 110
        },
        {
          item: "Product8",
          stockOnHand: 90
        },
        {
          item: "Product9",
          stockOnHand: 70
        },
        {
          item: "Product10",
          stockOnHand: 85
        }
      ];
    
      const purchaseData = [
        {
          item: "Product1",
          invoiceCount: 20
        },
        {
          item: "Service1",
          invoiceCount: 15
        },
        {
          item: "Product2",
          invoiceCount: 18
        },
        {
          item: "Service2",
          invoiceCount: 12
        },
        {
          item: "Product3",
          invoiceCount: 25
        },
        {
          item: "Service3",
          invoiceCount: 22
        },
        {
          item: "Product4",
          invoiceCount: 30
        },
        {
          item: "Service4",
          invoiceCount: 10
        },
        {
          item: "Product5",
          invoiceCount: 17
        },
        {
          item: "Service5",
          invoiceCount: 28
        }
      ];

    return (
        <section className="overflow-auto">
        <Nav tabs className="nav">
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'sold' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('sold')}
            >
              Sold
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'purchased' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('purchased')}
            >
              Purchased
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="tab-content">
          <TabPane tabId="sold">
            <DataTable columns={soldColumns} data={soldData} heading="Most Sold/Purchased Product and Service" />
          </TabPane>
          <TabPane tabId="purchased">
            <DataTable columns={purchasedColumns} data={purchaseData} heading="Most Sold/Purchased Product and Service" />
          </TabPane>
        </TabContent>
      </section>
    );
}
