# NedapOnsApi.OpenehrCarePlanVvtCareProfileLinkApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrCarePlanVvtCareProfileLinkAPILinkIds**](OpenehrCarePlanVvtCareProfileLinkApi.md#openehrCarePlanVvtCareProfileLinkAPILinkIds) | **POST** /v0/openehr_dossier/back_channel/unauthorized/vvt_care_profiles/care_plan_links | Returns care plan IDs for given VVT care profile composition IDs

<a name="openehrCarePlanVvtCareProfileLinkAPILinkIds"></a>
# **openehrCarePlanVvtCareProfileLinkAPILinkIds**
> OpenehrListCarePlanVvtCareProfileLinkList openehrCarePlanVvtCareProfileLinkAPILinkIds(body)

Returns care plan IDs for given VVT care profile composition IDs

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCarePlanVvtCareProfileLinkApi();
let body = new NedapOnsApi.OpenehrCompositionIdList(); // OpenehrCompositionIdList | 

apiInstance.openehrCarePlanVvtCareProfileLinkAPILinkIds(body, (error, data, response) => {
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
 **body** | [**OpenehrCompositionIdList**](OpenehrCompositionIdList.md)|  | 

### Return type

[**OpenehrListCarePlanVvtCareProfileLinkList**](OpenehrListCarePlanVvtCareProfileLinkList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

