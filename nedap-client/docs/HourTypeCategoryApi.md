# NedapOnsApi.HourTypeCategoryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hourTypeCategoryAPIAll**](HourTypeCategoryApi.md#hourTypeCategoryAPIAll) | **GET** /v0/administration/hour_type_categories | Returns every HourTypeCategory available from the HourTypeCategoryAPI
[**hourTypeCategoryAPIById**](HourTypeCategoryApi.md#hourTypeCategoryAPIById) | **GET** /v0/administration/hour_type_categories/{id} | Get the Hour Type Category corresponding to the given id
[**hourTypeCategoryAPIByName**](HourTypeCategoryApi.md#hourTypeCategoryAPIByName) | **GET** /v0/administration/hour_type_categories/by_name/{name} | Return the hour type category corresponding to the given name.

<a name="hourTypeCategoryAPIAll"></a>
# **hourTypeCategoryAPIAll**
> ListHourTypeCategoryList hourTypeCategoryAPIAll()

Returns every HourTypeCategory available from the HourTypeCategoryAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeCategoryApi();
apiInstance.hourTypeCategoryAPIAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ListHourTypeCategoryList**](ListHourTypeCategoryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeCategoryAPIById"></a>
# **hourTypeCategoryAPIById**
> HourTypeCategory hourTypeCategoryAPIById(id)

Get the Hour Type Category corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeCategoryApi();
let id = 789; // Number | used for selecting HourTypeCategory

apiInstance.hourTypeCategoryAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting HourTypeCategory | 

### Return type

[**HourTypeCategory**](HourTypeCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeCategoryAPIByName"></a>
# **hourTypeCategoryAPIByName**
> HourTypeCategory hourTypeCategoryAPIByName(name)

Return the hour type category corresponding to the given name.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeCategoryApi();
let name = "name_example"; // String | name of the hour type category

apiInstance.hourTypeCategoryAPIByName(name, (error, data, response) => {
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
 **name** | **String**| name of the hour type category | 

### Return type

[**HourTypeCategory**](HourTypeCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

