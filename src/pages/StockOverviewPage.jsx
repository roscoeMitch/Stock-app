import { AutoComplete } from "../components/AutoComplete"
import { Stocklist } from "../components/Stocklist"
import React from "react"
import logo from './logo1888.png'

export const StockOverviewPage = () => {
	return <div>
		<img src={logo} alt="Logo"></img>
		<AutoComplete/>
		<Stocklist/>
	</div>
}