# NedapOnsApi.FinanceInvoiceProviderGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeInvoiceProviderGroupAPIAll**](FinanceInvoiceProviderGroupApi.md#financeInvoiceProviderGroupAPIAll) | **GET** /v0/administration/finance/invoiceProviderGroups | Returns every InvoiceProviderGroup available from the InvoiceProviderGroupAPI

<a name="financeInvoiceProviderGroupAPIAll"></a>
# **financeInvoiceProviderGroupAPIAll**
> FinanceListInvoiceProviderGroupList financeInvoiceProviderGroupAPIAll(opts)

Returns every InvoiceProviderGroup available from the InvoiceProviderGroupAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceProviderGroupApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.financeInvoiceProviderGroupAPIAll(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**FinanceListInvoiceProviderGroupList**](FinanceListInvoiceProviderGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

