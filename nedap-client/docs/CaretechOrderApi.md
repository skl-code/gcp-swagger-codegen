# NedapOnsApi.CaretechOrderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caretechOrderAPIGetOrderServerGateway**](CaretechOrderApi.md#caretechOrderAPIGetOrderServerGateway) | **GET** /v0/caretech/server/orders/{order_id} | Get an care technology order
[**caretechOrderAPIGetOrdersServerGateway**](CaretechOrderApi.md#caretechOrderAPIGetOrdersServerGateway) | **GET** /v0/caretech/server/orders | Get all care technology orders with optional product codes and statuses
[**caretechOrderAPIUpdateOrderStatus**](CaretechOrderApi.md#caretechOrderAPIUpdateOrderStatus) | **PATCH** /v0/caretech/server/orders/{order_id}/status | Update the status of an order

<a name="caretechOrderAPIGetOrderServerGateway"></a>
# **caretechOrderAPIGetOrderServerGateway**
> CaretechOrder caretechOrderAPIGetOrderServerGateway(orderId)

Get an care technology order

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CaretechOrderApi();
let orderId = 789; // Number | 

apiInstance.caretechOrderAPIGetOrderServerGateway(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**CaretechOrder**](CaretechOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="caretechOrderAPIGetOrdersServerGateway"></a>
# **caretechOrderAPIGetOrdersServerGateway**
> CaretechListOrderList caretechOrderAPIGetOrdersServerGateway(opts)

Get all care technology orders with optional product codes and statuses

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CaretechOrderApi();
let opts = { 
  'productCodes': ["productCodes_example"], // [String] | 
  'statuses': [new NedapOnsApi.CaretechOrderStatus()] // [CaretechOrderStatus] | 
};
apiInstance.caretechOrderAPIGetOrdersServerGateway(opts, (error, data, response) => {
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
 **productCodes** | [**[String]**](String.md)|  | [optional] 
 **statuses** | [**[CaretechOrderStatus]**](CaretechOrderStatus.md)|  | [optional] 

### Return type

[**CaretechListOrderList**](CaretechListOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="caretechOrderAPIUpdateOrderStatus"></a>
# **caretechOrderAPIUpdateOrderStatus**
> caretechOrderAPIUpdateOrderStatus(body, orderId)

Update the status of an order

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CaretechOrderApi();
let body = new NedapOnsApi.CaretechOrderStatusUpdate(); // CaretechOrderStatusUpdate | 
let orderId = 789; // Number | 

apiInstance.caretechOrderAPIUpdateOrderStatus(body, orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CaretechOrderStatusUpdate**](CaretechOrderStatusUpdate.md)|  | 
 **orderId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

