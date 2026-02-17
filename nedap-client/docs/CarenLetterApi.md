# NedapOnsApi.CarenLetterApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carenLetterAPIByInvitationId**](CarenLetterApi.md#carenLetterAPIByInvitationId) | **GET** /v0/caren/invitations/{invitation_id}/letter | WARNING: DEPRECATED. This is only used by Ons Client and will be removed soon.

<a name="carenLetterAPIByInvitationId"></a>
# **carenLetterAPIByInvitationId**
> CarenLetter carenLetterAPIByInvitationId(invitationId)

WARNING: DEPRECATED. This is only used by Ons Client and will be removed soon.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CarenLetterApi();
let invitationId = 789; // Number | id of the invitation

apiInstance.carenLetterAPIByInvitationId(invitationId, (error, data, response) => {
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
 **invitationId** | **Number**| id of the invitation | 

### Return type

[**CarenLetter**](CarenLetter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

