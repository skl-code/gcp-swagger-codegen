# NedapOnsApi.FinanceForensicCareOrderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeForensicCareOrderAPIById**](FinanceForensicCareOrderApi.md#financeForensicCareOrderAPIById) | **GET** /v0/administration/finance/forensic_care_orders/{id} | Return the Forensic Care Order corresponding to the given id
[**financeForensicCareOrderAPICreate**](FinanceForensicCareOrderApi.md#financeForensicCareOrderAPICreate) | **POST** /v0/administration/finance/forensic_care_orders | Create ForensicCareOrder
[**financeForensicCareOrderAPIDelete**](FinanceForensicCareOrderApi.md#financeForensicCareOrderAPIDelete) | **DELETE** /v0/administration/finance/forensic_care_orders/{id} | Deletes the ForensicCareOrder with given id
[**financeForensicCareOrderAPIUpdate**](FinanceForensicCareOrderApi.md#financeForensicCareOrderAPIUpdate) | **PUT** /v0/administration/finance/forensic_care_orders/{id} | Updates the given ForensicCareOrder

<a name="financeForensicCareOrderAPIById"></a>
# **financeForensicCareOrderAPIById**
> FinanceForensicCareOrder financeForensicCareOrderAPIById(id, opts)

Return the Forensic Care Order corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceForensicCareOrderApi();
let id = 789; // Number | used for selecting ForensicCareOrder
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.financeForensicCareOrderAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ForensicCareOrder | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeForensicCareOrderAPICreate"></a>
# **financeForensicCareOrderAPICreate**
> FinanceForensicCareOrder financeForensicCareOrderAPICreate(body, opts)

Create ForensicCareOrder

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceForensicCareOrderApi();
let body = new NedapOnsApi.FinanceForensicCareOrder(); // FinanceForensicCareOrder | ForensicCareOrder to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.financeForensicCareOrderAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)| ForensicCareOrder to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeForensicCareOrderAPIDelete"></a>
# **financeForensicCareOrderAPIDelete**
> FinanceForensicCareOrder financeForensicCareOrderAPIDelete(id, opts)

Deletes the ForensicCareOrder with given id

Deleting a ForensicCareOrder may fail if other objects are still linked to it.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceForensicCareOrderApi();
let id = 789; // Number | used for selecting ForensicCareOrder
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.financeForensicCareOrderAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ForensicCareOrder | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeForensicCareOrderAPIUpdate"></a>
# **financeForensicCareOrderAPIUpdate**
> FinanceForensicCareOrder financeForensicCareOrderAPIUpdate(body, id, opts)

Updates the given ForensicCareOrder

Will create the object at the provided ID if it did not exist previously.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceForensicCareOrderApi();
let body = new NedapOnsApi.FinanceForensicCareOrder(); // FinanceForensicCareOrder | ForensicCareOrder to update
let id = 789; // Number | used for selecting ForensicCareOrder
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.financeForensicCareOrderAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)| ForensicCareOrder to update | 
 **id** | **Number**| used for selecting ForensicCareOrder | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**FinanceForensicCareOrder**](FinanceForensicCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

