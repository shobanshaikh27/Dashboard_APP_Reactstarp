import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import './InvoiceTable.css';

export default function InvoiceTable() {
    const [activeTab, setActiveTab] = useState("sales");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const salesData = [
        {
            invoice: "INVS001",
            pending_amount: 105000,
            date: "2024-05-01"
        },
        {
            invoice: "INVS002",
            pending_amount: 155000,
            date: "2024-05-02"
        },
        {
            invoice: "INVS003",
            pending_amount: 195000,
            date: "2024-05-03"
        },
        {
            invoice: "INVS004",
            pending_amount: 54000,
            date: "2024-05-04"
        },
        {
            invoice: "INVS005",
            pending_amount: 247000,
            date: "2024-05-05"
        },
        {
            invoice: "INVS006",
            pending_amount: 71000,
            date: "2024-05-06"
        },
        {
            invoice: "INVS007",
            pending_amount: 245000,
            date: "2024-05-07"
        },
        {
            invoice: "INVS008",
            pending_amount: 183000,
            date: "2024-05-08"
        },
        {
            invoice: "INVS009",
            pending_amount: 95000,
            date: "2024-05-09"
        },
        {
            invoice: "INVS010",
            pending_amount: 125000,
            date: "2024-05-10"
        },
        {
            invoice: "INVS011",
            pending_amount: 225000,
            date: "2024-05-11"
        },
        {
            invoice: "INVS012",
            pending_amount: 44000,
            date: "2024-05-12"
        },
        {
            invoice: "INVS013",
            pending_amount: 185000,
            date: "2024-05-13"
        },
        {
            invoice: "INVS014",
            pending_amount: 82000,
            date: "2024-05-14"
        },
        {
            invoice: "INVS015",
            pending_amount: 167000,
            date: "2024-05-15"
        },
        {
            invoice: "INVS016",
            pending_amount: 217000,
            date: "2024-05-16"
        },
        {
            invoice: "INVS017",
            pending_amount: 72000,
            date: "2024-05-17"
        },
        {
            invoice: "INVS018",
            pending_amount: 197000,
            date: "2024-05-18"
        },
        {
            invoice: "INVS019",
            pending_amount: 134000,
            date: "2024-05-19"
        },
        {
            invoice: "INVS020",
            pending_amount: 244000,
            date: "2024-05-20"
        }
    ];

    const purchaseData = [
        {
            invoice: "INVP001",
            pending_amount: 100000,
            date: "2024-05-01"
          },
          {
            invoice: "INVP002",
            pending_amount: 150000,
            date: "2024-05-02"
          },
          {
            invoice: "INVP003",
            pending_amount: 200000,
            date: "2024-05-03"
          },
          {
            invoice: "INVP004",
            pending_amount: 50000,
            date: "2024-05-04"
          },
          {
            invoice: "INVP005",
            pending_amount: 250000,
            date: "2024-05-05"
          },
          {
            invoice: "INVP006",
            pending_amount: 75000,
            date: "2024-05-06"
          },
          {
            invoice: "INVP007",
            pending_amount: 250000,
            date: "2024-05-07"
          },
          {
            invoice: "INVP008",
            pending_amount: 180000,
            date: "2024-05-08"
          },
          {
            invoice: "INVP009",
            pending_amount: 90000,
            date: "2024-05-09"
          },
          {
            invoice: "INVP010",
            pending_amount: 120000,
            date: "2024-05-10"
          },
          {
            invoice: "INVP011",
            pending_amount: 220000,
            date: "2024-05-11"
          },
          {
            invoice: "INVP012",
            pending_amount: 40000,
            date: "2024-05-12"
          },
          {
            invoice: "INVP013",
            pending_amount: 180000,
            date: "2024-05-13"
          },
          {
            invoice: "INVP014",
            pending_amount: 80000,
            date: "2024-05-14"
          },
          {
            invoice: "INVP015",
            pending_amount: 160000,
            date: "2024-05-15"
          },
          {
            invoice: "INVP016",
            pending_amount: 210000,
            date: "2024-05-16"
          },
          {
            invoice: "INVP017",
            pending_amount: 70000,
            date: "2024-05-17"
          },
          {
            invoice: "INVP018",
            pending_amount: 190000,
            date: "2024-05-18"
          },
          {
            invoice: "INVP019",
            pending_amount: 130000,
            date: "2024-05-19"
          },
          {
            invoice: "INVP020",
            pending_amount: 240000,
            date: "2024-05-20"
          }
        // Add your purchase data here
    ];

    return (
        <section className="overflow-auto">
        <Nav tabs className="nav">
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'sales' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('sales')}
            >
              Sales
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={activeTab === 'purchase' ? 'active nav-link' : 'nav-link'}
              onClick={() => toggle('purchase')}
            >
              Purchase
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="tab-content">
          <TabPane tabId="sales">
            <DataTable columns={columns} data={salesData} heading="Pending Sales Invoices" />
          </TabPane>
          <TabPane tabId="purchase">
            <DataTable columns={columns} data={purchaseData} heading="Pending Purchase Invoices" />
          </TabPane>
        </TabContent>
      </section>
    );
}
