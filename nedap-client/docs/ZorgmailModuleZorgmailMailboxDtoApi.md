# NedapOnsApi.ZorgmailModuleZorgmailMailboxDtoApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zorgmailModuleZorgmailMailboxDtoAPIValidate**](ZorgmailModuleZorgmailMailboxDtoApi.md#zorgmailModuleZorgmailMailboxDtoAPIValidate) | **POST** /v0/zorgmail_module/cupido/zorgmail/credentials/validate | validate

<a name="zorgmailModuleZorgmailMailboxDtoAPIValidate"></a>
# **zorgmailModuleZorgmailMailboxDtoAPIValidate**
> BooleanWithReason zorgmailModuleZorgmailMailboxDtoAPIValidate(body)

validate

Checks if the provided Zorgmail credentials are valid.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZorgmailModuleZorgmailMailboxDtoApi();
let body = new NedapOnsApi.ZorgmailModuleZorgmailMailboxDto(); // ZorgmailModuleZorgmailMailboxDto | 

apiInstance.zorgmailModuleZorgmailMailboxDtoAPIValidate(body, (error, data, response) => {
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
 **body** | [**ZorgmailModuleZorgmailMailboxDto**](ZorgmailModuleZorgmailMailboxDto.md)|  | 

### Return type

[**BooleanWithReason**](BooleanWithReason.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

