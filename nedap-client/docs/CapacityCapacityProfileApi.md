# NedapOnsApi.CapacityCapacityProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capacityCapacityProfileAPIAll**](CapacityCapacityProfileApi.md#capacityCapacityProfileAPIAll) | **GET** /v0/administration/capacity/capacity_profiles | Returns every CapacityProfile available from the CapacityProfileAPI
[**capacityCapacityProfileAPIAllActive**](CapacityCapacityProfileApi.md#capacityCapacityProfileAPIAllActive) | **GET** /v0/administration/capacity/capacity_profiles/all_active | Find a list of CapacityProfiles that are active on the given date.
[**capacityCapacityProfileAPIById**](CapacityCapacityProfileApi.md#capacityCapacityProfileAPIById) | **GET** /v0/administration/capacity/capacity_profiles/{id} | Return the Capacity Profile corresponding to the given id

<a name="capacityCapacityProfileAPIAll"></a>
# **capacityCapacityProfileAPIAll**
> CapacityListCapacityProfileList capacityCapacityProfileAPIAll()

Returns every CapacityProfile available from the CapacityProfileAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CapacityCapacityProfileApi();
apiInstance.capacityCapacityProfileAPIAll((error, data, response) => {
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

[**CapacityListCapacityProfileList**](CapacityListCapacityProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="capacityCapacityProfileAPIAllActive"></a>
# **capacityCapacityProfileAPIAllActive**
> CapacityListCapacityProfileList capacityCapacityProfileAPIAllActive(opts)

Find a list of CapacityProfiles that are active on the given date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CapacityCapacityProfileApi();
let opts = { 
  '_date': new Date("2013-10-20") // Date | date on which the capacity profiles should be active
};
apiInstance.capacityCapacityProfileAPIAllActive(opts, (error, data, response) => {
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
 **_date** | **Date**| date on which the capacity profiles should be active | [optional] 

### Return type

[**CapacityListCapacityProfileList**](CapacityListCapacityProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="capacityCapacityProfileAPIById"></a>
# **capacityCapacityProfileAPIById**
> CapacityCapacityProfile capacityCapacityProfileAPIById(id)

Return the Capacity Profile corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CapacityCapacityProfileApi();
let id = 789; // Number | used for selecting CapacityProfile

apiInstance.capacityCapacityProfileAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CapacityProfile | 

### Return type

[**CapacityCapacityProfile**](CapacityCapacityProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

