# NedapOnsApi.ZpmCareOrderZpmDetailsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zpmCareOrderZpmDetailsAPIByCareOrderId**](ZpmCareOrderZpmDetailsApi.md#zpmCareOrderZpmDetailsAPIByCareOrderId) | **GET** /v0/administration/zpm/care_orders/{care_order_id} | Fetches ZPM detail records for a given care order.
[**zpmCareOrderZpmDetailsAPICreate**](ZpmCareOrderZpmDetailsApi.md#zpmCareOrderZpmDetailsAPICreate) | **POST** /v0/administration/zpm/care_orders | Create ZPM detail records for a given care order.

<a name="zpmCareOrderZpmDetailsAPIByCareOrderId"></a>
# **zpmCareOrderZpmDetailsAPIByCareOrderId**
> ZpmCareOrderZpmDetails zpmCareOrderZpmDetailsAPIByCareOrderId(careOrderId)

Fetches ZPM detail records for a given care order.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZpmCareOrderZpmDetailsApi();
let careOrderId = 789; // Number | care order object ID.

apiInstance.zpmCareOrderZpmDetailsAPIByCareOrderId(careOrderId, (error, data, response) => {
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
 **careOrderId** | **Number**| care order object ID. | 

### Return type

[**ZpmCareOrderZpmDetails**](ZpmCareOrderZpmDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="zpmCareOrderZpmDetailsAPICreate"></a>
# **zpmCareOrderZpmDetailsAPICreate**
> ZpmCareOrderZpmDetails zpmCareOrderZpmDetailsAPICreate(body)

Create ZPM detail records for a given care order.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZpmCareOrderZpmDetailsApi();
let body = new NedapOnsApi.ZpmCareOrderZpmDetails(); // ZpmCareOrderZpmDetails | an object containing all detail records that  should be created.

apiInstance.zpmCareOrderZpmDetailsAPICreate(body, (error, data, response) => {
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
 **body** | [**ZpmCareOrderZpmDetails**](ZpmCareOrderZpmDetails.md)| an object containing all detail records that  should be created. | 

### Return type

[**ZpmCareOrderZpmDetails**](ZpmCareOrderZpmDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

