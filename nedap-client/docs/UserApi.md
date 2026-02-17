# NedapOnsApi.UserApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAPIByEmployeeId**](UserApi.md#userAPIByEmployeeId) | **GET** /v0/administration/users/by_employee_id/{employee_id} | Get user by employee ID
[**userAPIById**](UserApi.md#userAPIById) | **GET** /v0/administration/users/{id} | Get user by ID
[**userAPIBySso**](UserApi.md#userAPIBySso) | **GET** /v0/administration/users/by_sso | Return the User with the given SSO id
[**userAPIByUserName**](UserApi.md#userAPIByUserName) | **GET** /v0/administration/users/by_username | Find by user name.
[**userAPIByUserNameUnsafe**](UserApi.md#userAPIByUserNameUnsafe) | **GET** /v0/administration/users/by_username/{user_name} | Find by user name.
[**userAPIByUuid**](UserApi.md#userAPIByUuid) | **GET** /v0/administration/users/by_uuid/{uuid} | Get user by UUID
[**userAPIChangePassword**](UserApi.md#userAPIChangePassword) | **PUT** /v0/administration/users/{user_id}/password | Changes the users password
[**userAPICreate**](UserApi.md#userAPICreate) | **POST** /v0/administration/users | Create User
[**userAPIDelete**](UserApi.md#userAPIDelete) | **DELETE** /v0/administration/users/{id} | Deletes the User with given id
[**userAPIGetUserStatus**](UserApi.md#userAPIGetUserStatus) | **GET** /v0/administration/users/{user_id}/status | returns the status of the user
[**userAPILastVisitedLocations**](UserApi.md#userAPILastVisitedLocations) | **GET** /v0/administration/users/{user_id}/last_visited_locations | Return the last visited Locations of a User corresponding to the given id.
[**userAPIStreamAll**](UserApi.md#userAPIStreamAll) | **GET** /v0/xstream/responsibilities/data | Return all User models in a streaming manner
[**userAPIStreamDeletes**](UserApi.md#userAPIStreamDeletes) | **GET** /v0/xstream/responsibilities/deletes | Return all User models which where deleted since the date given in the request.
[**userAPIStreamUpdates**](UserApi.md#userAPIStreamUpdates) | **GET** /v0/xstream/responsibilities/updates | Return all User models which where updated since the date given in the request.
[**userAPIUpdate**](UserApi.md#userAPIUpdate) | **PUT** /v0/administration/users/{id} | Updates the given User
[**userAPIViewableLocations**](UserApi.md#userAPIViewableLocations) | **GET** /v0/administration/users/{user_id}/viewable_locations | Return the viewable Locations of a User corresponding to the given id.

<a name="userAPIByEmployeeId"></a>
# **userAPIByEmployeeId**
> User userAPIByEmployeeId(employeeId)

Get user by employee ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let employeeId = 789; // Number | id

apiInstance.userAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIById"></a>
# **userAPIById**
> User userAPIById(id)

Get user by ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let id = 789; // Number | used for selecting User

apiInstance.userAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting User | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIBySso"></a>
# **userAPIBySso**
> ListUserList userAPIBySso(ssoId, ssoProviderId)

Return the User with the given SSO id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let ssoId = "ssoId_example"; // String | 
let ssoProviderId = "ssoProviderId_example"; // String | 

apiInstance.userAPIBySso(ssoId, ssoProviderId, (error, data, response) => {
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
 **ssoId** | **String**|  | 
 **ssoProviderId** | **String**|  | 

### Return type

[**ListUserList**](ListUserList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIByUserName"></a>
# **userAPIByUserName**
> User userAPIByUserName(opts)

Find by user name.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let opts = { 
  'username': "username_example" // String | The username of the user to find
};
apiInstance.userAPIByUserName(opts, (error, data, response) => {
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
 **username** | **String**| The username of the user to find | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIByUserNameUnsafe"></a>
# **userAPIByUserNameUnsafe**
> User userAPIByUserNameUnsafe(userName)

Find by user name.

Use byUserNameSafe

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let userName = "userName_example"; // String | 

apiInstance.userAPIByUserNameUnsafe(userName, (error, data, response) => {
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
 **userName** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIByUuid"></a>
# **userAPIByUuid**
> User userAPIByUuid(uuid, opts)

Get user by UUID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'bumpSessionExpireTime': true // Boolean | 
};
apiInstance.userAPIByUuid(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **bumpSessionExpireTime** | **Boolean**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIChangePassword"></a>
# **userAPIChangePassword**
> PasswordChange userAPIChangePassword(body, userId)

Changes the users password

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let body = new NedapOnsApi.PasswordChange(); // PasswordChange | the new password, must consist of a combination of upper- and lowercase letters, numbers and special characters
let userId = 789; // Number | 

apiInstance.userAPIChangePassword(body, userId, (error, data, response) => {
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
 **body** | [**PasswordChange**](PasswordChange.md)| the new password, must consist of a combination of upper- and lowercase letters, numbers and special characters | 
 **userId** | **Number**|  | 

### Return type

[**PasswordChange**](PasswordChange.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAPICreate"></a>
# **userAPICreate**
> User userAPICreate(body)

Create User

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let body = new NedapOnsApi.User(); // User | User to create

apiInstance.userAPICreate(body, (error, data, response) => {
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
 **body** | [**User**](User.md)| User to create | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAPIDelete"></a>
# **userAPIDelete**
> User userAPIDelete(id)

Deletes the User with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let id = 789; // Number | used for selecting User

apiInstance.userAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting User | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIGetUserStatus"></a>
# **userAPIGetUserStatus**
> UserStatus userAPIGetUserStatus(userId)

returns the status of the user

containing a description about if the user is allowed to log into the application

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let userId = 789; // Number | user id

apiInstance.userAPIGetUserStatus(userId, (error, data, response) => {
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
 **userId** | **Number**| user id | 

### Return type

[**UserStatus**](UserStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPILastVisitedLocations"></a>
# **userAPILastVisitedLocations**
> ListLocationList userAPILastVisitedLocations(userId)

Return the last visited Locations of a User corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let userId = 789; // Number | id

apiInstance.userAPILastVisitedLocations(userId, (error, data, response) => {
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
 **userId** | **Number**| id | 

### Return type

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAPIStreamAll"></a>
# **userAPIStreamAll**
> ListUserList userAPIStreamAll()

Return all User models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
apiInstance.userAPIStreamAll((error, data, response) => {
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

[**ListUserList**](ListUserList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="userAPIStreamDeletes"></a>
# **userAPIStreamDeletes**
> ListUserList userAPIStreamDeletes(since)

Return all User models which where deleted since the date given in the request.

If no date is given it will return all deleted Membership models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.userAPIStreamDeletes(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**ListUserList**](ListUserList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="userAPIStreamUpdates"></a>
# **userAPIStreamUpdates**
> ListUserList userAPIStreamUpdates(since)

Return all User models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.userAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**ListUserList**](ListUserList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="userAPIUpdate"></a>
# **userAPIUpdate**
> User userAPIUpdate(body, id)

Updates the given User

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let body = new NedapOnsApi.User(); // User | User to update
let id = 789; // Number | used for selecting User

apiInstance.userAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**User**](User.md)| User to update | 
 **id** | **Number**| used for selecting User | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAPIViewableLocations"></a>
# **userAPIViewableLocations**
> ListLocationList userAPIViewableLocations(userId, opts)

Return the viewable Locations of a User corresponding to the given id.

use Shield. See https://github.com/nedap/shield/issues/3207#issuecomment-635947346

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.UserApi();
let userId = 789; // Number | id
let opts = { 
  'ignoreRecursiveLocationsEnabled': false // Boolean | Only return location user has explicitly access to, ignoring locations beneath those locations
};
apiInstance.userAPIViewableLocations(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| id | 
 **ignoreRecursiveLocationsEnabled** | **Boolean**| Only return location user has explicitly access to, ignoring locations beneath those locations | [optional] [default to false]

### Return type

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

