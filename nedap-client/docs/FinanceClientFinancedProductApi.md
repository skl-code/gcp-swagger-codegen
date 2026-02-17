# NedapOnsApi.FinanceClientFinancedProductApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod**](FinanceClientFinancedProductApi.md#financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod) | **GET** /v0/administration/finance/client_financed_products/by_location_and_finance_type_in_period | Retrieve the legally financeable products for all clients on a certain locations for a certain finance type.
[**financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod**](FinanceClientFinancedProductApi.md#financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod) | **GET** /v0/administration/finance/client_financed_products/by_location_and_finance_types_in_period | Retrieve the legally financeable products for all clients on a certain locations for a certain finance type.

<a name="financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod"></a>
# **financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod**
> FinanceListClientFinancedProductList financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod(opts)

Retrieve the legally financeable products for all clients on a certain locations for a certain finance type.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceClientFinancedProductApi();
let opts = { 
  'unitId': 789, // Number | the id of the location we want a list of
  'financeId': 789, // Number | the financetype we're interested in
  'startPeriod': new Date("2013-10-20"), // Date | the start of the period
  'endPeriod': new Date("2013-10-20") // Date | the end of the period
};
apiInstance.financeClientFinancedProductAPIByLocationAndFinanceTypeInPeriod(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unitId** | **Number**| the id of the location we want a list of | [optional] 
 **financeId** | **Number**| the financetype we&#x27;re interested in | [optional] 
 **startPeriod** | **Date**| the start of the period | [optional] 
 **endPeriod** | **Date**| the end of the period | [optional] 

### Return type

[**FinanceListClientFinancedProductList**](FinanceListClientFinancedProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod"></a>
# **financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod**
> FinanceListClientFinancedProductList financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod(opts)

Retrieve the legally financeable products for all clients on a certain locations for a certain finance type.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceClientFinancedProductApi();
let opts = { 
  'unitId': 789, // Number | the id of the location we want a list of
  'financeIds': [3.4], // [Number] | a list of the financetypes we're interested in
  'startPeriod': new Date("2013-10-20"), // Date | the start of the period
  'endPeriod': new Date("2013-10-20") // Date | the end of the period
};
apiInstance.financeClientFinancedProductAPIByLocationAndFinanceTypesInPeriod(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unitId** | **Number**| the id of the location we want a list of | [optional] 
 **financeIds** | [**[Number]**](Number.md)| a list of the financetypes we&#x27;re interested in | [optional] 
 **startPeriod** | **Date**| the start of the period | [optional] 
 **endPeriod** | **Date**| the end of the period | [optional] 

### Return type

[**FinanceListClientFinancedProductList**](FinanceListClientFinancedProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

