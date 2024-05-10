import React from 'react'
import InvoiceTable from '../components/Invoice/InvoiceTable';
import MvcTable from '../components/MvcTable/MvcTable';
import MspTable from '../components/MspTable/MspTable';
import WorkFlowCards from '../components/WorkFlowCards/WorkFlowCards';
import BalanceCards from '../components/BalanceCards/BalanceCards';
import SP_BarChart from '../components/SP-BarChart';
import IE_PieChart from '../components/IE-PieChart/IE-PieChart';
import BS_PieChart from '../components/BS-PieChart/BS-PieChart';
import BS_LineChart from '../components/BS-LineChart/BS_LineChart';
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <div className="p-2">
                    <WorkFlowCards />
                <div className="row row-cols-1 row-cols-md-12 g-4 justify-content-center m-8">
                    <div>
                    </div>
                    <div className="col-lg-4 col-md-12 justify-content-center align-self-center ">
                        <BalanceCards />
                    </div>

                    <div className="col-lg-4 col-md-6 h-100 col-sm-12  bg-white custom-bg-color">
                        
                    <div className="custom-class">Balance Sheet</div>
                    <div className='cards'>
                        <BS_PieChart />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 h-100 col-sm-12 rounded-xl shadow-xl bg-white custom-bg-color">
                    <div className="custom-class">Income and Expense</div>
                    <div className='cards'>
                        <IE_PieChart />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <InvoiceTable />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 h-full rounded-xl shadow-xl bg-white custom-bg-color">
                    <div className="custom-class">Sales and Purchase</div>
                    <div className='cards'>
                        <SP_BarChart />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 rounded-xl shadow-xl bg-white custom-bg-color">
                    <div className="custom-class">Bank and Cash Balance</div>
                    <div className='cards'>
                        <BS_LineChart />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <MvcTable />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <MspTable />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
