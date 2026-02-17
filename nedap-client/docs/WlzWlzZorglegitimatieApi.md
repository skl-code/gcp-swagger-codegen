# NedapOnsApi.WlzWlzZorglegitimatieApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wlzWlzZorglegitimatieAPIById**](WlzWlzZorglegitimatieApi.md#wlzWlzZorglegitimatieAPIById) | **GET** /v0/administration/wlz/zorglegitimaties/{id} | Return the WlzZorgLegitimatie corresponding to the given id
[**wlzWlzZorglegitimatieAPICreate**](WlzWlzZorglegitimatieApi.md#wlzWlzZorglegitimatieAPICreate) | **POST** /v0/administration/wlz/zorglegitimaties | Create WlzZorglegitimatie
[**wlzWlzZorglegitimatieAPIDelete**](WlzWlzZorglegitimatieApi.md#wlzWlzZorglegitimatieAPIDelete) | **DELETE** /v0/administration/wlz/zorglegitimaties/{id} | Delete a WlzZorglegitimatie

<a name="wlzWlzZorglegitimatieAPIById"></a>
# **wlzWlzZorglegitimatieAPIById**
> WlzWlzZorglegitimatie wlzWlzZorglegitimatieAPIById(id)

Return the WlzZorgLegitimatie corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WlzWlzZorglegitimatieApi();
let id = 789; // Number | used to find the WlzZorglegitimatie

apiInstance.wlzWlzZorglegitimatieAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used to find the WlzZorglegitimatie | 

### Return type

[**WlzWlzZorglegitimatie**](WlzWlzZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wlzWlzZorglegitimatieAPICreate"></a>
# **wlzWlzZorglegitimatieAPICreate**
> WlzWlzZorglegitimatie wlzWlzZorglegitimatieAPICreate(body)

Create WlzZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WlzWlzZorglegitimatieApi();
let body = new NedapOnsApi.WlzWlzZorglegitimatie(); // WlzWlzZorglegitimatie | WlzZorglegitimatie to create

apiInstance.wlzWlzZorglegitimatieAPICreate(body, (error, data, response) => {
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
 **body** | [**WlzWlzZorglegitimatie**](WlzWlzZorglegitimatie.md)| WlzZorglegitimatie to create | 

### Return type

[**WlzWlzZorglegitimatie**](WlzWlzZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="wlzWlzZorglegitimatieAPIDelete"></a>
# **wlzWlzZorglegitimatieAPIDelete**
> WlzWlzZorglegitimatie wlzWlzZorglegitimatieAPIDelete(id)

Delete a WlzZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WlzWlzZorglegitimatieApi();
let id = 789; // Number | used to find the WlzZorglegitimatie

apiInstance.wlzWlzZorglegitimatieAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used to find the WlzZorglegitimatie | 

### Return type

[**WlzWlzZorglegitimatie**](WlzWlzZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

