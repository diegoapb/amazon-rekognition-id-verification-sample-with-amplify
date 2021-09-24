/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listcollections = /* GraphQL */ `
  query Listcollections($param: String) {
    listcollections(param: $param) {
      CollectionId
      Arn
    }
  }
`;
export const describecollection = /* GraphQL */ `
  query Describecollection($collectionId: String) {
    describecollection(collectionId: $collectionId) {
      FaceCount
      FaceModelVersion
      CollectionARN
      CreationTimestamp
      CollectionId
    }
  }
`;
export const loginuser = /* GraphQL */ `
  query Loginuser($imageDataBase64: String) {
    loginuser(imageDataBase64: $imageDataBase64) {
      Success
      Message
      Confidence
      CompanyId
      UserId
      FirstName
      LastName
      DOB
      RegistrationStatus
      FaceId
      FaceImage
    }
  }
`;
export const detecttextinidcard = /* GraphQL */ `
  query Detecttextinidcard($imageDataBase64: String) {
    detecttextinidcard(imageDataBase64: $imageDataBase64) {
      Success
      Message
      DetectedText
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($companyid: String!, $userid: String!) {
    getUserInfo(companyid: $companyid, userid: $userid) {
      companyid
      userid
      firstname
      lastname
      dob
      registrationstatus
      faceimage
      faceid
      description
      createdAt
      updatedAt
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $companyid: String
    $userid: ModelStringKeyConditionInput
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserInfos(
      companyid: $companyid
      userid: $userid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        companyid
        userid
        firstname
        lastname
        dob
        registrationstatus
        faceimage
        faceid
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userInfoByFaceId = /* GraphQL */ `
  query UserInfoByFaceId(
    $companyid: String
    $faceid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userInfoByFaceId(
      companyid: $companyid
      faceid: $faceid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        companyid
        userid
        firstname
        lastname
        dob
        registrationstatus
        faceimage
        faceid
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userInfoByRegStatus = /* GraphQL */ `
  query UserInfoByRegStatus(
    $companyid: String
    $registrationstatus: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userInfoByRegStatus(
      companyid: $companyid
      registrationstatus: $registrationstatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        companyid
        userid
        firstname
        lastname
        dob
        registrationstatus
        faceimage
        faceid
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
