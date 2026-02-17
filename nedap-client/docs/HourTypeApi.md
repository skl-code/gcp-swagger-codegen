# NedapOnsApi.HourTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hourTypeAPIAll**](HourTypeApi.md#hourTypeAPIAll) | **GET** /v0/administration/hour_types | Returns every HourType available from the HourTypeAPI
[**hourTypeAPIByExpertiseProfileId**](HourTypeApi.md#hourTypeAPIByExpertiseProfileId) | **GET** /v0/administration/expertise_profiles/{expertise_profiles_id}/hour_types | Return the hour type of a ExpertiseProfiles corresponding to the given id.
[**hourTypeAPIById**](HourTypeApi.md#hourTypeAPIById) | **GET** /v0/administration/hour_types/{id} | Get the Hour Type corresponding to the given id
[**hourTypeAPIMultiple**](HourTypeApi.md#hourTypeAPIMultiple) | **GET** /v0/administration/hour_types/multiple | Method used for requesting multiple HourType objects using their ids.

<a name="hourTypeAPIAll"></a>
# **hourTypeAPIAll**
> ListHourTypeList hourTypeAPIAll()

Returns every HourType available from the HourTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeApi();
apiInstance.hourTypeAPIAll((error, data, response) => {
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

[**ListHourTypeList**](ListHourTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeAPIByExpertiseProfileId"></a>
# **hourTypeAPIByExpertiseProfileId**
> ListHourTypeList hourTypeAPIByExpertiseProfileId(expertiseProfilesId)

Return the hour type of a ExpertiseProfiles corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeApi();
let expertiseProfilesId = 789; // Number | id

apiInstance.hourTypeAPIByExpertiseProfileId(expertiseProfilesId, (error, data, response) => {
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
 **expertiseProfilesId** | **Number**| id | 

### Return type

[**ListHourTypeList**](ListHourTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeAPIById"></a>
# **hourTypeAPIById**
> HourType hourTypeAPIById(id)

Get the Hour Type corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeApi();
let id = 789; // Number | used for selecting HourType

apiInstance.hourTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting HourType | 

### Return type

[**HourType**](HourType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hourTypeAPIMultiple"></a>
# **hourTypeAPIMultiple**
> ListHourTypeList hourTypeAPIMultiple(opts)

Method used for requesting multiple HourType objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HourTypeApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.hourTypeAPIMultiple(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 

### Return type

[**ListHourTypeList**](ListHourTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

