<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<style>
#parent_div_1, #parent_div_2, #parent_div_3 {
  width: 100%;
  height: 100%;
  border: 1px solid green;
  margin-right: 10px;
  float: left;
}
.main_table {
  float: left;
  //margin-right: 5px;
  display:table;
}
.calculation_table{
	display:table;
}
</style>
</head>
<body>
<h2>MAGENTO OPEN SOURCE  vs. SHOPIFY: COST CALCULATOR</h2>
<div id='parent_div_1'>
	<div class="main_table">
		<p>Enter your annual turnover : <input type="text" id="main_annual_turnover" /></p>
		<p>Enter your AOV : <input type="text" id="main_aov" /></p>
		<p><input type="button" id="calculate" value="Calculate"></p>
	</div>

	<div class="calculation_table">
		<p>Your monthly turnover : <div id="your_monthly_turnover" >0</div></p>
		<p>Your monthly transactions : <div id="your_monthly_trans" >0</div></p>
		<p>Your annual transactions : <div id="your_annual_trans" >0</div></p>
	</div>
	<div class="">
		<p>&nbsp;</p>
	</div>
</div>
<br/>
<div>
<table border=1>
	<tr>
		<td style="float:right">Platform</td>
		<th colspan=3>Magento</th>
		<th colspan=3>Shopify</th>
		<th colspan=3>Shopify</th>
	</tr>
	<tr>
		<td style="float:right">Platform Type</td>
		<th colspan=3>Open Source</th>
		<th colspan=3>Regular</th>
		<th colspan=3>Advanced</th>
	</tr>
	<tr>
		<td style="float:right">Cost Type</td>
		<th>Upfront</th>
		<th>Monthly</th>
		<th>Yearly</th>
		<th>Upfront</th>
		<th>Monthly</th>
		<th>Yearly</th>
		<th>Upfront</th>
		<th>Monthly</th>
		<th>Yearly</th>
	</tr>
	<tr>
		<!-- Magento -->
		<td>Build Cost <br/> (indicative - supplier, circa 1% of annual turnover)</td>
		<td><div id="mage_buildcost_annaul_turnover_upfornt" >0</div></td>
		<td>&nbsp;</td>
		<td><div id="mage_buildcost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td><div id="shopr_buildcost_annaul_turnover_upfornt" >0</div></td>
		<td>&nbsp;</td>
		<td><div id="shopr_buildcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td><div id="shopa_buildcost_annaul_turnover_upfornt" >0</div></td>
		<td>&nbsp;</td>
		<td><div id="shopa_buildcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td>Hosting Cost <br/>(indicative supplier cost = 0.1% of monthly turnover)</td>
		<td>&nbsp;</td>
		<td><div id="mage_hostingcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_hostingcost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_hostingcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_hostingcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_hostingcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_hostingcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> Support / Maintenance Cost  <br/>(indicative supplier average monthly cost = 0.5% of monthly turnover)</td>
		<td>&nbsp;</td>
		<td><div id="mage_supportcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_supportcost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_supportcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_supportcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_supportcost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_supportcost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> Extension / Improvement Cost  <br/>(indicative supplier average monthly cost = 0.5% of monthly turnover)</td>
		<td>&nbsp;</td>
		<td><div id="mage_extensioncost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_extensioncost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_extensioncost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_extensioncost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_extensioncost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_extensioncost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> Payment Gateway fee %  <br/>(averages from top 4 providers)*</td>
		<td>&nbsp;</td>
		<td><div id="mage_gatewayperc_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_gatewayperc_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_gatewayperc_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_gatewayperc_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_gatewayperc_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_gatewayperc_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> Payment Gateway fee %  <br/>(averages from top 4 providers)*</td>
		<td>&nbsp;</td>
		<td><div id="mage_gatewaycost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_gatewaycost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_gatewaycost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_gatewaycost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_gatewaycost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_gatewaycost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> plat Transaction fee %  <br/>(averages from top 4 providers)*</td>
		<td>&nbsp;</td>
		<td><div id="mage_transactionfee_perc_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_transactionfee_perc_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_transactionfee_perc_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_transactionfee_perc_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_transactionfee_perc_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_transactionfee_perc_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> PlatForm Transaction fee Cost <br/>(averages from top 4 providers)*</td>
		<td>&nbsp;</td>
		<td><div id="mage_transactionfee_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_transactionfee_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_transactionfee_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_transactionfee_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_transactionfee_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_transactionfee_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> PlatForm License fee <br/>(averages from top 4 providers)*</td>
		<td>&nbsp;</td>
		<td><div id="mage_license_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_license_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_license_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_license_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_license_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_license_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> Total Platform Usage Cost</td>
		<td>&nbsp;</td>
		<td><div id="mage_total_platfrom_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_total_platfrom_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td>&nbsp;</td>
		<td><div id="shopr_total_platfrom_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_total_platfrom_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td>&nbsp;</td>
		<td><div id="shopa_total_platfrom_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_total_platfrom_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
	<tr>
		<!-- Magento -->
		<td> YOUR TOTAL YEAR 1 COST</td>
		<td><div id="mage_total_cost_annaul_turnover_upfront" >0</div></td>
		<td><div id="mage_total_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="mage_total_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Magento end -->
		<!-- Shoppify regular -->
		<td><div id="shopr_total_cost_annaul_turnover_upfront" >0</div></td>
		<td><div id="shopr_total_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopr_total_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify regular End-->
		<!-- Shoppify advanced -->
		<td><div id="shopa_total_cost_annaul_turnover_upfront" >0</div></td>
		<td><div id="shopa_total_cost_annaul_turnover_monthly" >0</div></td>
		<td><div id="shopa_total_cost_annaul_turnover_yearly" >0</div></td>
		<!-- Shoppify advanced End-->
	</tr>
</table>
</div>
</body>
</html>

<script>
$(document).ready(function(){
	function replaceSpecialChars(data){
		return data.replace(/[^\w\s]/gi,'');
	}
	
	var main_annual_turnover = 0;
	var main_aov = 0;
	//First calculation
	var your_monthly_turnover=0;
	var your_monthly_trans=0;
	var your_annual_trans=0;
	
	$("#calculate").click(function(){
		main_annual_turnover = parseFloat(replaceSpecialChars($('#main_annual_turnover').val()));
		main_aov = parseFloat(replaceSpecialChars($('#main_aov').val()));
		if(isNaN(main_annual_turnover)){
			alert('Please Enter your annual turnover in number format');
		}
		else if(isNaN(main_aov)){
			alert('Please Enter your AOV in number format');
		}else{
			your_monthly_turnover = parseFloat(main_annual_turnover/12).toFixed(0);
			your_monthly_trans = parseFloat(your_monthly_turnover/main_aov).toFixed(0);
			your_annual_trans = parseFloat(your_monthly_trans*12).toFixed(0);
			$('#your_monthly_turnover').text(your_monthly_turnover);
			$('#your_monthly_trans').text(your_monthly_trans);
			$('#your_annual_trans').text(your_annual_trans);
			var build_cost_array = build_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var hosting_cost_array = hosting_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var support_cost_array = support_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var extension_cost_array = extension_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			gateway_perc(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var gateway_cost_array = gateway_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			transactionfee_perc(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var transactionfee_cost_array = transactionfee_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var license_cost_array = license_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans);
			var total_platform_cost_array = total_platform_cost(license_cost_array,transactionfee_cost_array);
			total_cost(build_cost_array,hosting_cost_array,support_cost_array,extension_cost_array,gateway_cost_array,total_platform_cost_array);
			
		}
	});
	
	//Build Cost (0.1%)
	function build_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		
		// Magento calculation one perc
		var mage_buildcost_annaul_turnover_upfornt = parseFloat((main_annual_turnover * 1)/100).toFixed(0);
		var mage_buildcost_annaul_turnover_yearly = parseFloat(mage_buildcost_annaul_turnover_upfornt).toFixed(0);
			
		$('#mage_buildcost_annaul_turnover_upfornt').text(mage_buildcost_annaul_turnover_upfornt);
		$('#mage_buildcost_annaul_turnover_yearly').text(mage_buildcost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_buildcost_annaul_turnover_upfornt = parseFloat((main_annual_turnover * 0.5)/100).toFixed(0);
		var shopr_buildcost_annaul_turnover_yearly = parseFloat(shopr_buildcost_annaul_turnover_upfornt).toFixed(0);
			
		$('#shopr_buildcost_annaul_turnover_upfornt').text(shopr_buildcost_annaul_turnover_upfornt);
		$('#shopr_buildcost_annaul_turnover_yearly').text(shopr_buildcost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_buildcost_annaul_turnover_upfornt = parseFloat((main_annual_turnover * 0.5)/100).toFixed(0);
		var shopa_buildcost_annaul_turnover_yearly = parseFloat(shopa_buildcost_annaul_turnover_upfornt).toFixed(0);
			
		$('#shopa_buildcost_annaul_turnover_upfornt').text(shopa_buildcost_annaul_turnover_upfornt);
		$('#shopa_buildcost_annaul_turnover_yearly').text(shopa_buildcost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_buildcost_annaul_turnover_upfornt'] = mage_buildcost_annaul_turnover_upfornt;
		response['mage_buildcost_annaul_turnover_yearly'] = mage_buildcost_annaul_turnover_yearly;
		
		response['shopr_buildcost_annaul_turnover_upfornt'] = shopr_buildcost_annaul_turnover_upfornt;
		response['shopr_buildcost_annaul_turnover_yearly'] = shopr_buildcost_annaul_turnover_yearly;
		
		response['shopa_buildcost_annaul_turnover_upfornt'] = shopa_buildcost_annaul_turnover_upfornt;
		response['shopa_buildcost_annaul_turnover_yearly'] = shopa_buildcost_annaul_turnover_yearly;
		
		return response;
		//return "";
		
		
	}
	
	//Hosting Cost (0.1%)
	function hosting_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		
		// Magento calculation one perc
		var mage_hostingcost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.1)/100).toFixed(0);
		var mage_hostingcost_annaul_turnover_yearly = parseFloat(mage_hostingcost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_hostingcost_annaul_turnover_monthly').text(mage_hostingcost_annaul_turnover_monthly);
		$('#mage_hostingcost_annaul_turnover_yearly').text(mage_hostingcost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		//var shopr_hostingcost_annaul_turnover_monthly = parseFloat((main_annual_turnover * 0.5)/100).toFixed(0);
		var shopr_hostingcost_annaul_turnover_monthly = 0.00;
		//var shopr_hostingcost_annaul_turnover_yearly = parseFloat(shopr_hostingcost_annaul_turnover_monthly*12).toFixed(0);
		var shopr_hostingcost_annaul_turnover_yearly = 0.00;
			
		$('#shopr_hostingcost_annaul_turnover_monthly').text(0);
		$('#shopr_hostingcost_annaul_turnover_yearly').text(0);
		
		//Shoppify advanced calculation
		//var shopa_hostingcost_annaul_turnover_monthly = parseFloat((main_annual_turnover * 0.5)/100).toFixed(0);
		var shopa_hostingcost_annaul_turnover_monthly = 0.00;
		//var shopa_hostingcost_annaul_turnover_yearly = parseFloat(shopa_hostingcost_annaul_turnover_monthly*12).toFixed(0);
		var shopa_hostingcost_annaul_turnover_yearly = 0.00;
			
		$('#shopa_hostingcost_annaul_turnover_monthly').text(0);
		$('#shopa_hostingcost_annaul_turnover_yearly').text(0);
		
		var response = [];
		response['mage_hostingcost_annaul_turnover_monthly'] = mage_hostingcost_annaul_turnover_monthly;
		response['mage_hostingcost_annaul_turnover_yearly'] = mage_hostingcost_annaul_turnover_yearly;
		
		response['shopr_hostingcost_annaul_turnover_monthly'] = shopr_hostingcost_annaul_turnover_monthly;
		response['shopr_hostingcost_annaul_turnover_yearly'] = shopr_hostingcost_annaul_turnover_yearly;
		
		response['shopa_hostingcost_annaul_turnover_monthly'] = shopa_hostingcost_annaul_turnover_monthly;
		response['shopa_hostingcost_annaul_turnover_yearly'] = shopa_hostingcost_annaul_turnover_yearly;
		
		return response;
	}
	//Supporting Cost (0.1%)
	function support_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		
		// Magento calculation one perc
		var mage_supportcost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var mage_supportcost_annaul_turnover_yearly = parseFloat(mage_supportcost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_supportcost_annaul_turnover_monthly').text(mage_supportcost_annaul_turnover_monthly);
		$('#mage_supportcost_annaul_turnover_yearly').text(mage_supportcost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_supportcost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var shopr_supportcost_annaul_turnover_yearly = parseFloat(shopr_supportcost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopr_supportcost_annaul_turnover_monthly').text(shopr_supportcost_annaul_turnover_monthly);
		$('#shopr_supportcost_annaul_turnover_yearly').text(shopr_supportcost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_supportcost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var shopa_supportcost_annaul_turnover_yearly = parseFloat(shopa_supportcost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopa_supportcost_annaul_turnover_monthly').text(shopa_supportcost_annaul_turnover_monthly);
		$('#shopa_supportcost_annaul_turnover_yearly').text(shopa_supportcost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_supportcost_annaul_turnover_monthly'] = mage_supportcost_annaul_turnover_monthly;
		response['mage_supportcost_annaul_turnover_yearly'] = mage_supportcost_annaul_turnover_yearly;
		
		response['shopr_supportcost_annaul_turnover_monthly'] = shopr_supportcost_annaul_turnover_monthly;
		response['shopr_supportcost_annaul_turnover_yearly'] = shopr_supportcost_annaul_turnover_yearly;
		
		response['shopa_supportcost_annaul_turnover_monthly'] = shopa_supportcost_annaul_turnover_monthly;
		response['shopa_supportcost_annaul_turnover_yearly'] = shopa_supportcost_annaul_turnover_yearly;
		
		return response;
	}
	//Extension / Imporvement Cost 
	function extension_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		
		// Magento calculation one perc
		var mage_extensioncost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var mage_extensioncost_annaul_turnover_yearly = parseFloat(mage_extensioncost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_extensioncost_annaul_turnover_monthly').text(mage_extensioncost_annaul_turnover_monthly);
		$('#mage_extensioncost_annaul_turnover_yearly').text(mage_extensioncost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_extensioncost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var shopr_extensioncost_annaul_turnover_yearly = parseFloat(shopr_extensioncost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopr_extensioncost_annaul_turnover_monthly').text(shopr_extensioncost_annaul_turnover_monthly);
		$('#shopr_extensioncost_annaul_turnover_yearly').text(shopr_extensioncost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_extensioncost_annaul_turnover_monthly = parseFloat((your_monthly_turnover * 0.5)/100).toFixed(0);
		var shopa_extensioncost_annaul_turnover_yearly = parseFloat(shopa_extensioncost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopa_extensioncost_annaul_turnover_monthly').text(shopa_extensioncost_annaul_turnover_monthly);
		$('#shopa_extensioncost_annaul_turnover_yearly').text(shopa_extensioncost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_extensioncost_annaul_turnover_monthly'] = mage_extensioncost_annaul_turnover_monthly;
		response['mage_extensioncost_annaul_turnover_yearly'] = mage_extensioncost_annaul_turnover_yearly;
		
		response['shopr_extensioncost_annaul_turnover_monthly'] = shopr_extensioncost_annaul_turnover_monthly;
		response['shopr_extensioncost_annaul_turnover_yearly'] = shopr_extensioncost_annaul_turnover_yearly;
		
		response['shopa_extensioncost_annaul_turnover_monthly'] = shopa_extensioncost_annaul_turnover_monthly;
		response['shopa_extensioncost_annaul_turnover_yearly'] = shopa_extensioncost_annaul_turnover_yearly;
		
		return response;
		
		
	}
	//Payment Gateway Cost (0.1%)
	function gateway_perc(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		var mage_gateway_perc = 1.40237125;
		var shopr_gateway_perc = 1.40237125;
		var shopa_gateway_perc = 1.40237125;	
		$('#mage_gatewayperc_annaul_turnover_monthly').text(parseFloat(mage_gateway_perc).toFixed(2)+'%');
		$('#mage_gatewayperc_annaul_turnover_yearly').text(parseFloat(mage_gateway_perc).toFixed(2)+'%');
		
		//shoppify Regular calculation
			
		$('#shopr_gatewayperc_annaul_turnover_monthly').text(parseFloat(shopr_gateway_perc).toFixed(2)+'%');
		$('#shopr_gatewayperc_annaul_turnover_yearly').text(parseFloat(shopr_gateway_perc).toFixed(2)+'%');
		
		//Shoppify advanced calculation
			
		$('#shopa_gatewayperc_annaul_turnover_monthly').text(parseFloat(shopa_gateway_perc).toFixed(2)+'%');
		$('#shopa_gatewayperc_annaul_turnover_yearly').text(parseFloat(shopa_gateway_perc).toFixed(2)+'%');
	}
	//Payment Gateway Cost (0.1%)
	function gateway_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		var mage_gateway_perc = 1.40237125;
		var shopr_gateway_perc = 1.40237125;
		var shopa_gateway_perc = 1.40237125;
		// Magento calculation one perc
		var mage_gatewaycost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*mage_gateway_perc)/100).toFixed(0);
		var mage_gatewaycost_annaul_turnover_yearly = parseFloat(mage_gatewaycost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_gatewaycost_annaul_turnover_monthly').text(mage_gatewaycost_annaul_turnover_monthly);
		$('#mage_gatewaycost_annaul_turnover_yearly').text(mage_gatewaycost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_gatewaycost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*shopr_gateway_perc)/100).toFixed(0);
		var shopr_gatewaycost_annaul_turnover_yearly = parseFloat(shopr_gatewaycost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopr_gatewaycost_annaul_turnover_monthly').text(shopr_gatewaycost_annaul_turnover_monthly);
		$('#shopr_gatewaycost_annaul_turnover_yearly').text(shopr_gatewaycost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_gatewaycost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*shopa_gateway_perc)/100).toFixed(0);
		var shopa_gatewaycost_annaul_turnover_yearly = parseFloat(shopa_gatewaycost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopa_gatewaycost_annaul_turnover_monthly').text(shopa_gatewaycost_annaul_turnover_monthly);
		$('#shopa_gatewaycost_annaul_turnover_yearly').text(shopa_gatewaycost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_gatewaycost_annaul_turnover_monthly'] = mage_gatewaycost_annaul_turnover_monthly;
		response['mage_gatewaycost_annaul_turnover_yearly'] = mage_gatewaycost_annaul_turnover_yearly;
		
		response['shopr_gatewaycost_annaul_turnover_monthly'] = shopr_gatewaycost_annaul_turnover_monthly;
		response['shopr_gatewaycost_annaul_turnover_yearly'] = shopr_gatewaycost_annaul_turnover_yearly;
		
		response['shopa_gatewaycost_annaul_turnover_monthly'] = shopa_gatewaycost_annaul_turnover_monthly;
		response['shopa_gatewaycost_annaul_turnover_yearly'] = shopa_gatewaycost_annaul_turnover_yearly;
		
		return response;
	}
	//Transaction Fee Percentage (0.1%)
	function transactionfee_perc(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		var mage_transactionfee_perc = 0;
		var shopr_transactionfee_perc = 1;
		var shopa_transactionfee_perc = 0.50;
		$('#mage_transactionfee_perc_annaul_turnover_monthly').text(parseFloat(mage_transactionfee_perc).toFixed(2)+'%');
		$('#mage_transactionfee_perc_annaul_turnover_yearly').text(parseFloat(mage_transactionfee_perc).toFixed(2)+'%');
		
		//shoppify Regular calculation
			
		$('#shopr_transactionfee_perc_annaul_turnover_monthly').text(parseFloat(shopr_transactionfee_perc).toFixed(2)+'%');
		$('#shopr_transactionfee_perc_annaul_turnover_yearly').text(parseFloat(shopr_transactionfee_perc).toFixed(2)+'%');
		
		//Shoppify advanced calculation
			
		$('#shopa_transactionfee_perc_annaul_turnover_monthly').text(parseFloat(shopa_transactionfee_perc).toFixed(2)+'%');
		$('#shopa_transactionfee_perc_annaul_turnover_yearly').text(parseFloat(shopa_transactionfee_perc).toFixed(2)+'%');
	}
	//Payment Gateway Cost (0.1%)
	function transactionfee_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		var mage_transactionfee_perc = 0;
		var shopr_transactionfee_perc = 1;
		var shopa_transactionfee_perc = 0.50;
		// Magento calculation one perc
		var mage_transactionfee_cost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*mage_transactionfee_perc)/100).toFixed(0);
		var mage_transactionfee_cost_annaul_turnover_yearly = parseFloat(mage_transactionfee_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_transactionfee_cost_annaul_turnover_monthly').text(mage_transactionfee_cost_annaul_turnover_monthly);
		$('#mage_transactionfee_cost_annaul_turnover_yearly').text(mage_transactionfee_cost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_transactionfee_cost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*shopr_transactionfee_perc)/100).toFixed(0);
		var shopr_transactionfee_cost_annaul_turnover_yearly = parseFloat(shopr_transactionfee_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopr_transactionfee_cost_annaul_turnover_monthly').text(shopr_transactionfee_cost_annaul_turnover_monthly);
		$('#shopr_transactionfee_cost_annaul_turnover_yearly').text(shopr_transactionfee_cost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_transactionfee_cost_annaul_turnover_monthly = parseFloat((your_monthly_trans * main_aov*shopa_transactionfee_perc)/100).toFixed(0);
		var shopa_transactionfee_cost_annaul_turnover_yearly = parseFloat(shopa_transactionfee_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopa_transactionfee_cost_annaul_turnover_monthly').text(shopa_transactionfee_cost_annaul_turnover_monthly);
		$('#shopa_transactionfee_cost_annaul_turnover_yearly').text(shopa_transactionfee_cost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_transactionfee_cost_annaul_turnover_monthly'] = mage_transactionfee_cost_annaul_turnover_monthly;
		response['mage_transactionfee_cost_annaul_turnover_yearly'] = mage_transactionfee_cost_annaul_turnover_yearly;
		
		response['shopr_transactionfee_cost_annaul_turnover_monthly'] = shopr_transactionfee_cost_annaul_turnover_monthly;
		response['shopr_transactionfee_cost_annaul_turnover_yearly'] = shopr_transactionfee_cost_annaul_turnover_yearly;
		
		response['shopa_transactionfee_cost_annaul_turnover_monthly'] = shopa_transactionfee_cost_annaul_turnover_monthly;
		response['shopa_transactionfee_cost_annaul_turnover_yearly'] = shopa_transactionfee_cost_annaul_turnover_yearly;
		
		return response;
	}
	// Platform License Fee Cost
	function license_cost(main_annual_turnover,main_aov,your_monthly_turnover,your_monthly_trans,your_annual_trans){
		var mage_license_cost = 0;
		var shopr_license_cost = 61.72;
		var shopa_license_cost = 233.22;
		// Magento calculation one perc
		var mage_license_cost_annaul_turnover_monthly = parseFloat(mage_license_cost).toFixed(2);
		var mage_license_cost_annaul_turnover_yearly = parseFloat(mage_license_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#mage_license_cost_annaul_turnover_monthly').text(mage_license_cost_annaul_turnover_monthly);
		$('#mage_license_cost_annaul_turnover_yearly').text(mage_license_cost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_license_cost_annaul_turnover_monthly = parseFloat(shopr_license_cost).toFixed(2);
		var shopr_license_cost_annaul_turnover_yearly = parseFloat(shopr_license_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopr_license_cost_annaul_turnover_monthly').text(shopr_license_cost_annaul_turnover_monthly);
		$('#shopr_license_cost_annaul_turnover_yearly').text(shopr_license_cost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_license_cost_annaul_turnover_monthly = parseFloat(shopa_license_cost).toFixed(2);
		var shopa_license_cost_annaul_turnover_yearly = parseFloat(shopa_license_cost_annaul_turnover_monthly*12).toFixed(0);
			
		$('#shopa_license_cost_annaul_turnover_monthly').text(shopa_license_cost_annaul_turnover_monthly);
		$('#shopa_license_cost_annaul_turnover_yearly').text(shopa_license_cost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_license_cost_annaul_turnover_monthly'] = mage_license_cost_annaul_turnover_monthly;
		response['mage_license_cost_annaul_turnover_yearly'] = mage_license_cost_annaul_turnover_yearly;
		
		response['shopr_license_cost_annaul_turnover_monthly'] = shopr_license_cost_annaul_turnover_monthly;
		response['shopr_license_cost_annaul_turnover_yearly'] = shopr_license_cost_annaul_turnover_yearly;
		
		response['shopa_license_cost_annaul_turnover_monthly'] = shopa_license_cost_annaul_turnover_monthly;
		response['shopa_license_cost_annaul_turnover_yearly'] = shopa_license_cost_annaul_turnover_yearly;
		
		return response;
	}
	//Total Plat form Cost
	function total_platform_cost(license_cost_array,transactionfee_cost_array){
		
		// Magento calculation one perc
		var mage_total_platfrom_cost_annaul_turnover_monthly = parseFloat(parseFloat(license_cost_array['mage_license_cost_annaul_turnover_monthly']) + parseFloat(transactionfee_cost_array['mage_transactionfee_cost_annaul_turnover_monthly'])).toFixed(0);
		var mage_total_platfrom_cost_annaul_turnover_yearly = parseFloat(parseFloat(license_cost_array['mage_license_cost_annaul_turnover_yearly']) + parseFloat(transactionfee_cost_array['mage_transactionfee_cost_annaul_turnover_yearly'])).toFixed(0);
			
		$('#mage_total_platfrom_cost_annaul_turnover_monthly').text(mage_total_platfrom_cost_annaul_turnover_monthly);
		$('#mage_total_platfrom_cost_annaul_turnover_yearly').text(mage_total_platfrom_cost_annaul_turnover_yearly);
		
		//shoppify Regular calculation
		var shopr_total_platfrom_cost_annaul_turnover_monthly = parseFloat(parseFloat(license_cost_array['shopr_license_cost_annaul_turnover_monthly']) + parseFloat(transactionfee_cost_array['shopr_transactionfee_cost_annaul_turnover_monthly'])).toFixed(0);
		var shopr_total_platfrom_cost_annaul_turnover_yearly = parseFloat(parseFloat(license_cost_array['shopr_license_cost_annaul_turnover_yearly']) + parseFloat(transactionfee_cost_array['shopr_transactionfee_cost_annaul_turnover_yearly'])).toFixed(0);
			
		$('#shopr_total_platfrom_cost_annaul_turnover_monthly').text(shopr_total_platfrom_cost_annaul_turnover_monthly);
		$('#shopr_total_platfrom_cost_annaul_turnover_yearly').text(shopr_total_platfrom_cost_annaul_turnover_yearly);
		
		//Shoppify advanced calculation
		var shopa_total_platfrom_cost_annaul_turnover_monthly = parseFloat(parseFloat(license_cost_array['shopa_license_cost_annaul_turnover_monthly']) + parseFloat(transactionfee_cost_array['shopa_transactionfee_cost_annaul_turnover_monthly'])).toFixed(0);
		var shopa_total_platfrom_cost_annaul_turnover_yearly = parseFloat(parseFloat(license_cost_array['shopa_license_cost_annaul_turnover_yearly']) + parseFloat(transactionfee_cost_array['shopa_transactionfee_cost_annaul_turnover_yearly'])).toFixed(0);
			
		$('#shopa_total_platfrom_cost_annaul_turnover_monthly').text(shopa_total_platfrom_cost_annaul_turnover_monthly);
		$('#shopa_total_platfrom_cost_annaul_turnover_yearly').text(shopa_total_platfrom_cost_annaul_turnover_yearly);
		
		var response = [];
		response['mage_total_platfrom_cost_annaul_turnover_monthly'] = mage_total_platfrom_cost_annaul_turnover_monthly;
		response['mage_total_platfrom_cost_annaul_turnover_yearly'] = mage_total_platfrom_cost_annaul_turnover_yearly;
		
		response['shopr_total_platfrom_cost_annaul_turnover_monthly'] = shopr_total_platfrom_cost_annaul_turnover_monthly;
		response['shopr_total_platfrom_cost_annaul_turnover_yearly'] = shopr_total_platfrom_cost_annaul_turnover_yearly;
		
		response['shopa_total_platfrom_cost_annaul_turnover_monthly'] = shopa_total_platfrom_cost_annaul_turnover_monthly;
		response['shopa_total_platfrom_cost_annaul_turnover_yearly'] = shopa_total_platfrom_cost_annaul_turnover_yearly;
		
		return response;
		
		
	}
	function total_cost(build_cost_array,hosting_cost_array,support_cost_array,extension_cost_array,gateway_cost_array,total_platform_cost_array){
		console.log(build_cost_array);
		console.log(hosting_cost_array);
		console.log(support_cost_array);
		console.log(extension_cost_array);
		console.log(gateway_cost_array);
		console.log(total_platform_cost_array);
		var mage_total_cost_annaul_turnover_upfront = parseFloat(build_cost_array['mage_buildcost_annaul_turnover_upfornt']).toFixed(0);
		var shopr_total_cost_annaul_turnover_upfront = parseFloat(build_cost_array['shopr_buildcost_annaul_turnover_upfornt']).toFixed(0);
		var shopa_total_cost_annaul_turnover_upfront = parseFloat(build_cost_array['shopa_buildcost_annaul_turnover_upfornt']).toFixed(0);
		
		var mage_total_cost_annaul_turnover_monthly = parseFloat(parseFloat(hosting_cost_array['mage_hostingcost_annaul_turnover_monthly']) + parseFloat(support_cost_array['mage_supportcost_annaul_turnover_monthly']) + 
										parseFloat(extension_cost_array['mage_extensioncost_annaul_turnover_monthly']) + parseFloat(gateway_cost_array['mage_gatewaycost_annaul_turnover_monthly']) + parseFloat(total_platform_cost_array['mage_total_platfrom_cost_annaul_turnover_monthly'])).toFixed(0);
		var mage_total_cost_annaul_turnover_yearly = parseFloat(parseFloat(build_cost_array['mage_buildcost_annaul_turnover_yearly']) + parseFloat(hosting_cost_array['mage_hostingcost_annaul_turnover_yearly']) + parseFloat(support_cost_array['mage_supportcost_annaul_turnover_yearly']) + 
										parseFloat(extension_cost_array['mage_extensioncost_annaul_turnover_yearly']) + parseFloat(gateway_cost_array['mage_gatewaycost_annaul_turnover_yearly']) + parseFloat(total_platform_cost_array['mage_total_platfrom_cost_annaul_turnover_yearly'])).toFixed(0);
										
		
										
		var shopr_total_cost_annaul_turnover_monthly = parseFloat(parseFloat(hosting_cost_array['shopr_hostingcost_annaul_turnover_monthly']) + parseFloat(support_cost_array['shopr_supportcost_annaul_turnover_monthly']) + 
										parseFloat(extension_cost_array['shopr_extensioncost_annaul_turnover_monthly']) + parseFloat(gateway_cost_array['shopr_gatewaycost_annaul_turnover_monthly']) + parseFloat(total_platform_cost_array['shopr_total_platfrom_cost_annaul_turnover_monthly'])).toFixed(0);
		var shopr_total_cost_annaul_turnover_yearly = parseFloat(parseFloat(build_cost_array['shopr_buildcost_annaul_turnover_yearly']) + parseFloat(hosting_cost_array['shopr_hostingcost_annaul_turnover_yearly']) + parseFloat(support_cost_array['shopr_supportcost_annaul_turnover_yearly']) + 
										parseFloat(extension_cost_array['shopr_extensioncost_annaul_turnover_yearly']) + parseFloat(gateway_cost_array['shopr_gatewaycost_annaul_turnover_yearly']) + parseFloat(total_platform_cost_array['shopr_total_platfrom_cost_annaul_turnover_yearly'])).toFixed(0);
	
		
		var shopa_total_cost_annaul_turnover_monthly = parseFloat(parseFloat(hosting_cost_array['shopa_hostingcost_annaul_turnover_monthly']) + parseFloat(support_cost_array['shopa_supportcost_annaul_turnover_monthly']) + 
										parseFloat(extension_cost_array['shopa_extensioncost_annaul_turnover_monthly']) + parseFloat(gateway_cost_array['shopa_gatewaycost_annaul_turnover_monthly']) + parseFloat(total_platform_cost_array['shopa_total_platfrom_cost_annaul_turnover_monthly'])).toFixed(0);
		var shopa_total_cost_annaul_turnover_yearly = parseFloat(parseFloat(build_cost_array['shopa_buildcost_annaul_turnover_yearly']) + parseFloat(hosting_cost_array['shopa_hostingcost_annaul_turnover_yearly']) + parseFloat(support_cost_array['shopa_supportcost_annaul_turnover_yearly']) + 
										parseFloat(extension_cost_array['shopa_extensioncost_annaul_turnover_yearly']) + parseFloat(gateway_cost_array['shopa_gatewaycost_annaul_turnover_yearly']) + parseFloat(total_platform_cost_array['shopa_total_platfrom_cost_annaul_turnover_yearly'])).toFixed(0);
										
		
		$('#mage_total_cost_annaul_turnover_upfront').text(mage_total_cost_annaul_turnover_upfront);
		$('#mage_total_cost_annaul_turnover_monthly').text(mage_total_cost_annaul_turnover_monthly);
		$('#mage_total_cost_annaul_turnover_yearly').text(mage_total_cost_annaul_turnover_yearly);
		$('#shopr_total_cost_annaul_turnover_upfront').text(shopr_total_cost_annaul_turnover_upfront);
		$('#shopr_total_cost_annaul_turnover_monthly').text(shopr_total_cost_annaul_turnover_monthly);
		$('#shopr_total_cost_annaul_turnover_yearly').text(shopr_total_cost_annaul_turnover_yearly);
		$('#shopa_total_cost_annaul_turnover_upfront').text(shopa_total_cost_annaul_turnover_upfront);
		$('#shopa_total_cost_annaul_turnover_monthly').text(shopa_total_cost_annaul_turnover_monthly);
		$('#shopa_total_cost_annaul_turnover_yearly').text(shopa_total_cost_annaul_turnover_yearly);
	}
});
</script>