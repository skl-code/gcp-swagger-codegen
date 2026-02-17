# NedapOnsApi.NexusOrganisationCategoryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nexusOrganisationCategoryAPIAll**](NexusOrganisationCategoryApi.md#nexusOrganisationCategoryAPIAll) | **GET** /v0/ons_nexus/organisation_categories | Returns every OrganisationCategory available from the OrganisationCategoryAPI
[**nexusOrganisationCategoryAPIById**](NexusOrganisationCategoryApi.md#nexusOrganisationCategoryAPIById) | **GET** /v0/ons_nexus/organisation_categories/{id} | 

<a name="nexusOrganisationCategoryAPIAll"></a>
# **nexusOrganisationCategoryAPIAll**
> NexusListOrganisationCategoryList nexusOrganisationCategoryAPIAll(opts)

Returns every OrganisationCategory available from the OrganisationCategoryAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusOrganisationCategoryApi();
let opts = { 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.nexusOrganisationCategoryAPIAll(opts, (error, data, response) => {
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
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**NexusListOrganisationCategoryList**](NexusListOrganisationCategoryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusOrganisationCategoryAPIById"></a>
# **nexusOrganisationCategoryAPIById**
> NexusOrganisationCategory nexusOrganisationCategoryAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusOrganisationCategoryApi();
let id = 789; // Number | used for selecting OrganisationCategory

apiInstance.nexusOrganisationCategoryAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting OrganisationCategory | 

### Return type

[**NexusOrganisationCategory**](NexusOrganisationCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

