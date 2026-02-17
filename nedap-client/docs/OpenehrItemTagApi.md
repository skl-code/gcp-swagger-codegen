# NedapOnsApi.OpenehrItemTagApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrItemTagAPICreate**](OpenehrItemTagApi.md#openehrItemTagAPICreate) | **POST** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{versioned_composition_id}/item_tags | Creates an item tag for a spesific versioned composition and returns the created item tag.
[**openehrItemTagAPIDelete**](OpenehrItemTagApi.md#openehrItemTagAPIDelete) | **POST** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{versioned_composition_id}/item_tags/delete | Deletes item tag for a versioned composition.

<a name="openehrItemTagAPICreate"></a>
# **openehrItemTagAPICreate**
> OpenehrItemTag openehrItemTagAPICreate(body, versionedCompositionId, opts)

Creates an item tag for a spesific versioned composition and returns the created item tag.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrItemTagApi();
let body = new NedapOnsApi.OpenehrItemTag(); // OpenehrItemTag | 
let versionedCompositionId = 789; // Number | 
let opts = { 
  'moduleUuid': ["moduleUuid_example"], // [String] | UUID's of modules that the archetypes of the requested compositions should belong to
  'xChironSkipAuthorization': false // Boolean | 
};
apiInstance.openehrItemTagAPICreate(body, versionedCompositionId, opts, (error, data, response) => {
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
 **body** | [**OpenehrItemTag**](OpenehrItemTag.md)|  | 
 **versionedCompositionId** | **Number**|  | 
 **moduleUuid** | [**[String]**](String.md)| UUID&#x27;s of modules that the archetypes of the requested compositions should belong to | [optional] 
 **xChironSkipAuthorization** | **Boolean**|  | [optional] [default to false]

### Return type

[**OpenehrItemTag**](OpenehrItemTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="openehrItemTagAPIDelete"></a>
# **openehrItemTagAPIDelete**
> OpenehrItemTag openehrItemTagAPIDelete(body, versionedCompositionId, opts)

Deletes item tag for a versioned composition.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrItemTagApi();
let body = new NedapOnsApi.OpenehrItemTag(); // OpenehrItemTag | 
let versionedCompositionId = 789; // Number | 
let opts = { 
  'moduleUuid': ["moduleUuid_example"], // [String] | UUID's of modules that the archetypes of the requested compositions should belong to
  'xChironSkipAuthorization': false // Boolean | 
};
apiInstance.openehrItemTagAPIDelete(body, versionedCompositionId, opts, (error, data, response) => {
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
 **body** | [**OpenehrItemTag**](OpenehrItemTag.md)|  | 
 **versionedCompositionId** | **Number**|  | 
 **moduleUuid** | [**[String]**](String.md)| UUID&#x27;s of modules that the archetypes of the requested compositions should belong to | [optional] 
 **xChironSkipAuthorization** | **Boolean**|  | [optional] [default to false]

### Return type

[**OpenehrItemTag**](OpenehrItemTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

