# NedapOnsApi.HeraldAnnouncementCountApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heraldAnnouncementCountAPIByUserId**](HeraldAnnouncementCountApi.md#heraldAnnouncementCountAPIByUserId) | **GET** /v0/announcements/announcement_count | 

<a name="heraldAnnouncementCountAPIByUserId"></a>
# **heraldAnnouncementCountAPIByUserId**
> HeraldAnnouncementCount heraldAnnouncementCountAPIByUserId(opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.HeraldAnnouncementCountApi();
let opts = { 
  'userId': 789 // Number | 
};
apiInstance.heraldAnnouncementCountAPIByUserId(opts, (error, data, response) => {
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
 **userId** | **Number**|  | [optional] 

### Return type

[**HeraldAnnouncementCount**](HeraldAnnouncementCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

