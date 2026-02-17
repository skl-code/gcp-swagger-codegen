# NedapOnsApi.CarepathTemplateApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carepathTemplateAPIById**](CarepathTemplateApi.md#carepathTemplateAPIById) | **GET** /v0/zorgpaden/template/v2/{uuid} | Fetch a care path template
[**carepathTemplateAPICreate**](CarepathTemplateApi.md#carepathTemplateAPICreate) | **POST** /v0/zorgpaden/template/v2 | Create Template

<a name="carepathTemplateAPIById"></a>
# **carepathTemplateAPIById**
> CarepathTemplate carepathTemplateAPIById(uuid)

Fetch a care path template

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarepathTemplateApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | used for selecting Template

apiInstance.carepathTemplateAPIById(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| used for selecting Template | 

### Return type

[**CarepathTemplate**](CarepathTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="carepathTemplateAPICreate"></a>
# **carepathTemplateAPICreate**
> CarepathTemplate carepathTemplateAPICreate(body)

Create Template

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarepathTemplateApi();
let body = new NedapOnsApi.CarepathTemplate(); // CarepathTemplate | Template to create

apiInstance.carepathTemplateAPICreate(body, (error, data, response) => {
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
 **body** | [**CarepathTemplate**](CarepathTemplate.md)| Template to create | 

### Return type

[**CarepathTemplate**](CarepathTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

