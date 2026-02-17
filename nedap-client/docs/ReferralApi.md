# NedapOnsApi.ReferralApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referralAPIByClient**](ReferralApi.md#referralAPIByClient) | **GET** /v0/administration/referrals/by_client/{client_id} | Returns the referrals of the client corresponding to the given client id.
[**referralAPIById**](ReferralApi.md#referralAPIById) | **GET** /v0/administration/referrals/{id} | Return the Referral corresponding to the given id
[**referralAPICreate**](ReferralApi.md#referralAPICreate) | **POST** /v0/administration/referrals | Create Referral
[**referralAPIGetAllReferrerCategories**](ReferralApi.md#referralAPIGetAllReferrerCategories) | **GET** /v0/administration/referrals/categories | Fetch all available ReferrerCategories accompanied by their available referrer types

<a name="referralAPIByClient"></a>
# **referralAPIByClient**
> ListReferralList referralAPIByClient(clientId)

Returns the referrals of the client corresponding to the given client id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ReferralApi();
let clientId = 789; // Number | 

apiInstance.referralAPIByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**|  | 

### Return type

[**ListReferralList**](ListReferralList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="referralAPIById"></a>
# **referralAPIById**
> Referral referralAPIById(id)

Return the Referral corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ReferralApi();
let id = 789; // Number | used for selecting Referral

apiInstance.referralAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Referral | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="referralAPICreate"></a>
# **referralAPICreate**
> Referral referralAPICreate(body)

Create Referral

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ReferralApi();
let body = new NedapOnsApi.Referral(); // Referral | Referral to create

apiInstance.referralAPICreate(body, (error, data, response) => {
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
 **body** | [**Referral**](Referral.md)| Referral to create | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="referralAPIGetAllReferrerCategories"></a>
# **referralAPIGetAllReferrerCategories**
> ListReferrerCategoryList referralAPIGetAllReferrerCategories()

Fetch all available ReferrerCategories accompanied by their available referrer types

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ReferralApi();
apiInstance.referralAPIGetAllReferrerCategories((error, data, response) => {
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

[**ListReferrerCategoryList**](ListReferrerCategoryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

