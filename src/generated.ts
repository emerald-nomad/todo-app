/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "./context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
    datetime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTime";
    email<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Email";
    password<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Password";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    datetime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    email<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Email";
    password<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Password";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateCategoryInput: { // input type
    name: string; // String!
  }
  CreateTaskInput: { // input type
    categoryId: string; // ID!
    date: any; // DateTime!
    description: string; // String!
  }
  DeleteTaskInput: { // input type
    categoryId: string; // ID!
    taskId: string; // ID!
  }
  LoginInput: { // input type
    password: string; // String!
    username: string; // String!
  }
  SignUpInput: { // input type
    confirmPassword: any; // Password!
    password: any; // Password!
    username: string; // String!
  }
  UpdateCategoryInput: { // input type
    categoryId: string; // ID!
    name: string; // String!
  }
  UpdateTaskInput: { // input type
    completed?: boolean | null; // Boolean
    date?: any | null; // DateTime
    description?: string | null; // String
    id: string; // ID!
    rank?: number | null; // Int
  }
  UpdateTasksInput: { // input type
    tasks: NexusGenInputs['UpdateTaskInput'][]; // [UpdateTaskInput!]!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // root type
    id: string; // ID!
    name: string; // String!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Mutation: {};
  Query: {};
  Task: { // root type
    completed: boolean; // Boolean!
    date: any; // DateTime!
    description: string; // String!
    id: string; // ID!
    rank: number; // Int!
  }
  User: { // root type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    id: string; // ID!
    username: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: Date;
  DateTime: DateTime;
  Email: any;
  Password: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CreateCategoryInput: NexusGenInputs['CreateCategoryInput'];
  CreateTaskInput: NexusGenInputs['CreateTaskInput'];
  DeleteTaskInput: NexusGenInputs['DeleteTaskInput'];
  LoginInput: NexusGenInputs['LoginInput'];
  SignUpInput: NexusGenInputs['SignUpInput'];
  UpdateCategoryInput: NexusGenInputs['UpdateCategoryInput'];
  UpdateTaskInput: NexusGenInputs['UpdateTaskInput'];
  UpdateTasksInput: NexusGenInputs['UpdateTasksInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // field return type
    id: string; // ID!
    name: string; // String!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Mutation: { // field return type
    createCategory: NexusGenRootTypes['Category']; // Category!
    createTask: NexusGenRootTypes['Task']; // Task!
    deleteTask: boolean; // Boolean!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    logout: boolean; // Boolean!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateCategory: NexusGenRootTypes['Category']; // Category!
    updateTasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    hello: string; // String!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
    user: NexusGenRootTypes['User']; // User!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Task: { // field return type
    completed: boolean; // Boolean!
    date: any; // DateTime!
    description: string; // String!
    id: string; // ID!
    rank: number; // Int!
  }
  User: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    id: string; // ID!
    username: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCategory: { // args
      data: NexusGenInputs['CreateCategoryInput']; // CreateCategoryInput!
    }
    createTask: { // args
      data: NexusGenInputs['CreateTaskInput']; // CreateTaskInput!
    }
    deleteTask: { // args
      data: NexusGenInputs['DeleteTaskInput']; // DeleteTaskInput!
    }
    login: { // args
      data: NexusGenInputs['LoginInput']; // LoginInput!
    }
    signup: { // args
      data: NexusGenInputs['SignUpInput']; // SignUpInput!
    }
    updateCategory: { // args
      data: NexusGenInputs['UpdateCategoryInput']; // UpdateCategoryInput!
    }
    updateTasks: { // args
      data: NexusGenInputs['UpdateTasksInput']; // UpdateTasksInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "Category" | "Mutation" | "Query" | "Task" | "User";

export type NexusGenInputNames = "CreateCategoryInput" | "CreateTaskInput" | "DeleteTaskInput" | "LoginInput" | "SignUpInput" | "UpdateCategoryInput" | "UpdateTaskInput" | "UpdateTasksInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "DateTime" | "Email" | "Float" | "ID" | "Int" | "Password" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}