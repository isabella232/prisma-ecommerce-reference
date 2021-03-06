export const typeDefs = /* GraphQL */ `type AggregateAttribute {
  count: Int!
}

type AggregateBrand {
  count: Int!
}

type AggregateCollection {
  count: Int!
}

type AggregateCollectionRule {
  count: Int!
}

type AggregateCollectionRuleSet {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateOption {
  count: Int!
}

type AggregateOptionValue {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductType {
  count: Int!
}

type AggregateVariant {
  count: Int!
}

type Attribute {
  id: ID!
  key: String!
  value: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type AttributeConnection {
  pageInfo: PageInfo!
  edges: [AttributeEdge]!
  aggregate: AggregateAttribute!
}

input AttributeCreateInput {
  key: String!
  value: String!
  products: ProductCreateManyWithoutAttributesInput
}

input AttributeCreateManyWithoutProductsInput {
  create: [AttributeCreateWithoutProductsInput!]
  connect: [AttributeWhereUniqueInput!]
}

input AttributeCreateWithoutProductsInput {
  key: String!
  value: String!
}

type AttributeEdge {
  node: Attribute!
  cursor: String!
}

enum AttributeOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  value_ASC
  value_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AttributePreviousValues {
  id: ID!
  key: String!
  value: String!
}

input AttributeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [AttributeScalarWhereInput!]
  OR: [AttributeScalarWhereInput!]
  NOT: [AttributeScalarWhereInput!]
}

type AttributeSubscriptionPayload {
  mutation: MutationType!
  node: Attribute
  updatedFields: [String!]
  previousValues: AttributePreviousValues
}

input AttributeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttributeWhereInput
  AND: [AttributeSubscriptionWhereInput!]
  OR: [AttributeSubscriptionWhereInput!]
  NOT: [AttributeSubscriptionWhereInput!]
}

input AttributeUpdateInput {
  key: String
  value: String
  products: ProductUpdateManyWithoutAttributesInput
}

input AttributeUpdateManyDataInput {
  key: String
  value: String
}

input AttributeUpdateManyMutationInput {
  key: String
  value: String
}

input AttributeUpdateManyWithoutProductsInput {
  create: [AttributeCreateWithoutProductsInput!]
  delete: [AttributeWhereUniqueInput!]
  connect: [AttributeWhereUniqueInput!]
  disconnect: [AttributeWhereUniqueInput!]
  update: [AttributeUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [AttributeUpsertWithWhereUniqueWithoutProductsInput!]
  deleteMany: [AttributeScalarWhereInput!]
  updateMany: [AttributeUpdateManyWithWhereNestedInput!]
}

input AttributeUpdateManyWithWhereNestedInput {
  where: AttributeScalarWhereInput!
  data: AttributeUpdateManyDataInput!
}

input AttributeUpdateWithoutProductsDataInput {
  key: String
  value: String
}

input AttributeUpdateWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput!
  data: AttributeUpdateWithoutProductsDataInput!
}

input AttributeUpsertWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput!
  update: AttributeUpdateWithoutProductsDataInput!
  create: AttributeCreateWithoutProductsInput!
}

input AttributeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [AttributeWhereInput!]
  OR: [AttributeWhereInput!]
  NOT: [AttributeWhereInput!]
}

input AttributeWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Brand {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type BrandConnection {
  pageInfo: PageInfo!
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  name: String!
  products: ProductCreateManyWithoutBrandInput
}

input BrandCreateOneWithoutProductsInput {
  create: BrandCreateWithoutProductsInput
  connect: BrandWhereUniqueInput
}

input BrandCreateWithoutProductsInput {
  name: String!
}

type BrandEdge {
  node: Brand!
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BrandPreviousValues {
  id: ID!
  name: String!
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
  AND: [BrandSubscriptionWhereInput!]
  OR: [BrandSubscriptionWhereInput!]
  NOT: [BrandSubscriptionWhereInput!]
}

input BrandUpdateInput {
  name: String
  products: ProductUpdateManyWithoutBrandInput
}

input BrandUpdateManyMutationInput {
  name: String
}

input BrandUpdateOneRequiredWithoutProductsInput {
  create: BrandCreateWithoutProductsInput
  update: BrandUpdateWithoutProductsDataInput
  upsert: BrandUpsertWithoutProductsInput
  connect: BrandWhereUniqueInput
}

input BrandUpdateWithoutProductsDataInput {
  name: String
}

input BrandUpsertWithoutProductsInput {
  update: BrandUpdateWithoutProductsDataInput!
  create: BrandCreateWithoutProductsInput!
}

input BrandWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [BrandWhereInput!]
  OR: [BrandWhereInput!]
  NOT: [BrandWhereInput!]
}

input BrandWhereUniqueInput {
  id: ID
}

type Collection {
  id: ID!
  name: String!
  rules: CollectionRuleSet
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type CollectionConnection {
  pageInfo: PageInfo!
  edges: [CollectionEdge]!
  aggregate: AggregateCollection!
}

input CollectionCreateInput {
  name: String!
  rules: CollectionRuleSetCreateOneInput
  products: ProductCreateManyWithoutCollectionsInput
}

input CollectionCreateManyWithoutProductsInput {
  create: [CollectionCreateWithoutProductsInput!]
  connect: [CollectionWhereUniqueInput!]
}

input CollectionCreateWithoutProductsInput {
  name: String!
  rules: CollectionRuleSetCreateOneInput
}

type CollectionEdge {
  node: Collection!
  cursor: String!
}

enum CollectionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollectionPreviousValues {
  id: ID!
  name: String!
}

type CollectionRule {
  field: CollectionRuleField!
  relation: CollectionRuleRelation!
  value: String!
}

type CollectionRuleConnection {
  pageInfo: PageInfo!
  edges: [CollectionRuleEdge]!
  aggregate: AggregateCollectionRule!
}

input CollectionRuleCreateInput {
  field: CollectionRuleField!
  relation: CollectionRuleRelation!
  value: String!
}

input CollectionRuleCreateManyInput {
  create: [CollectionRuleCreateInput!]
}

type CollectionRuleEdge {
  node: CollectionRule!
  cursor: String!
}

enum CollectionRuleField {
  TYPE
  TITLE
  PRICE
}

enum CollectionRuleOrderByInput {
  field_ASC
  field_DESC
  relation_ASC
  relation_DESC
  value_ASC
  value_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollectionRulePreviousValues {
  field: CollectionRuleField!
  relation: CollectionRuleRelation!
  value: String!
}

enum CollectionRuleRelation {
  CONTAINS
  ENDS_WITH
  EQUALS
  GREATER_THAN
  LESS_THAN
  NOT_CONTAINS
  NOT_EQUALS
  STARTS_WITH
}

input CollectionRuleScalarWhereInput {
  field: CollectionRuleField
  field_not: CollectionRuleField
  field_in: [CollectionRuleField!]
  field_not_in: [CollectionRuleField!]
  relation: CollectionRuleRelation
  relation_not: CollectionRuleRelation
  relation_in: [CollectionRuleRelation!]
  relation_not_in: [CollectionRuleRelation!]
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [CollectionRuleScalarWhereInput!]
  OR: [CollectionRuleScalarWhereInput!]
  NOT: [CollectionRuleScalarWhereInput!]
}

type CollectionRuleSet {
  rules(where: CollectionRuleWhereInput, orderBy: CollectionRuleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollectionRule!]
  appliesDisjunctively: Boolean!
}

type CollectionRuleSetConnection {
  pageInfo: PageInfo!
  edges: [CollectionRuleSetEdge]!
  aggregate: AggregateCollectionRuleSet!
}

input CollectionRuleSetCreateInput {
  rules: CollectionRuleCreateManyInput
  appliesDisjunctively: Boolean!
}

input CollectionRuleSetCreateOneInput {
  create: CollectionRuleSetCreateInput
}

type CollectionRuleSetEdge {
  node: CollectionRuleSet!
  cursor: String!
}

enum CollectionRuleSetOrderByInput {
  appliesDisjunctively_ASC
  appliesDisjunctively_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollectionRuleSetPreviousValues {
  appliesDisjunctively: Boolean!
}

type CollectionRuleSetSubscriptionPayload {
  mutation: MutationType!
  node: CollectionRuleSet
  updatedFields: [String!]
  previousValues: CollectionRuleSetPreviousValues
}

input CollectionRuleSetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CollectionRuleSetWhereInput
  AND: [CollectionRuleSetSubscriptionWhereInput!]
  OR: [CollectionRuleSetSubscriptionWhereInput!]
  NOT: [CollectionRuleSetSubscriptionWhereInput!]
}

input CollectionRuleSetUpdateDataInput {
  rules: CollectionRuleUpdateManyInput
  appliesDisjunctively: Boolean
}

input CollectionRuleSetUpdateManyMutationInput {
  appliesDisjunctively: Boolean
}

input CollectionRuleSetUpdateOneInput {
  create: CollectionRuleSetCreateInput
  update: CollectionRuleSetUpdateDataInput
  upsert: CollectionRuleSetUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input CollectionRuleSetUpsertNestedInput {
  update: CollectionRuleSetUpdateDataInput!
  create: CollectionRuleSetCreateInput!
}

input CollectionRuleSetWhereInput {
  rules_every: CollectionRuleWhereInput
  rules_some: CollectionRuleWhereInput
  rules_none: CollectionRuleWhereInput
  appliesDisjunctively: Boolean
  appliesDisjunctively_not: Boolean
  AND: [CollectionRuleSetWhereInput!]
  OR: [CollectionRuleSetWhereInput!]
  NOT: [CollectionRuleSetWhereInput!]
}

type CollectionRuleSubscriptionPayload {
  mutation: MutationType!
  node: CollectionRule
  updatedFields: [String!]
  previousValues: CollectionRulePreviousValues
}

input CollectionRuleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CollectionRuleWhereInput
  AND: [CollectionRuleSubscriptionWhereInput!]
  OR: [CollectionRuleSubscriptionWhereInput!]
  NOT: [CollectionRuleSubscriptionWhereInput!]
}

input CollectionRuleUpdateManyDataInput {
  field: CollectionRuleField
  relation: CollectionRuleRelation
  value: String
}

input CollectionRuleUpdateManyInput {
  create: [CollectionRuleCreateInput!]
  deleteMany: [CollectionRuleScalarWhereInput!]
  updateMany: [CollectionRuleUpdateManyWithWhereNestedInput!]
}

input CollectionRuleUpdateManyMutationInput {
  field: CollectionRuleField
  relation: CollectionRuleRelation
  value: String
}

input CollectionRuleUpdateManyWithWhereNestedInput {
  where: CollectionRuleScalarWhereInput!
  data: CollectionRuleUpdateManyDataInput!
}

input CollectionRuleWhereInput {
  field: CollectionRuleField
  field_not: CollectionRuleField
  field_in: [CollectionRuleField!]
  field_not_in: [CollectionRuleField!]
  relation: CollectionRuleRelation
  relation_not: CollectionRuleRelation
  relation_in: [CollectionRuleRelation!]
  relation_not_in: [CollectionRuleRelation!]
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [CollectionRuleWhereInput!]
  OR: [CollectionRuleWhereInput!]
  NOT: [CollectionRuleWhereInput!]
}

input CollectionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CollectionScalarWhereInput!]
  OR: [CollectionScalarWhereInput!]
  NOT: [CollectionScalarWhereInput!]
}

type CollectionSubscriptionPayload {
  mutation: MutationType!
  node: Collection
  updatedFields: [String!]
  previousValues: CollectionPreviousValues
}

input CollectionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CollectionWhereInput
  AND: [CollectionSubscriptionWhereInput!]
  OR: [CollectionSubscriptionWhereInput!]
  NOT: [CollectionSubscriptionWhereInput!]
}

input CollectionUpdateInput {
  name: String
  rules: CollectionRuleSetUpdateOneInput
  products: ProductUpdateManyWithoutCollectionsInput
}

input CollectionUpdateManyDataInput {
  name: String
}

input CollectionUpdateManyMutationInput {
  name: String
}

input CollectionUpdateManyWithoutProductsInput {
  create: [CollectionCreateWithoutProductsInput!]
  delete: [CollectionWhereUniqueInput!]
  connect: [CollectionWhereUniqueInput!]
  disconnect: [CollectionWhereUniqueInput!]
  update: [CollectionUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [CollectionUpsertWithWhereUniqueWithoutProductsInput!]
  deleteMany: [CollectionScalarWhereInput!]
  updateMany: [CollectionUpdateManyWithWhereNestedInput!]
}

input CollectionUpdateManyWithWhereNestedInput {
  where: CollectionScalarWhereInput!
  data: CollectionUpdateManyDataInput!
}

input CollectionUpdateWithoutProductsDataInput {
  name: String
  rules: CollectionRuleSetUpdateOneInput
}

input CollectionUpdateWithWhereUniqueWithoutProductsInput {
  where: CollectionWhereUniqueInput!
  data: CollectionUpdateWithoutProductsDataInput!
}

input CollectionUpsertWithWhereUniqueWithoutProductsInput {
  where: CollectionWhereUniqueInput!
  update: CollectionUpdateWithoutProductsDataInput!
  create: CollectionCreateWithoutProductsInput!
}

input CollectionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rules: CollectionRuleSetWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [CollectionWhereInput!]
  OR: [CollectionWhereInput!]
  NOT: [CollectionWhereInput!]
}

input CollectionWhereUniqueInput {
  id: ID
}

type Image {
  id: ID!
  url: String!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  url: String!
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateDataInput {
  url: String
}

input ImageUpdateInput {
  url: String
}

input ImageUpdateManyMutationInput {
  url: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAttribute(data: AttributeCreateInput!): Attribute!
  updateAttribute(data: AttributeUpdateInput!, where: AttributeWhereUniqueInput!): Attribute
  updateManyAttributes(data: AttributeUpdateManyMutationInput!, where: AttributeWhereInput): BatchPayload!
  upsertAttribute(where: AttributeWhereUniqueInput!, create: AttributeCreateInput!, update: AttributeUpdateInput!): Attribute!
  deleteAttribute(where: AttributeWhereUniqueInput!): Attribute
  deleteManyAttributes(where: AttributeWhereInput): BatchPayload!
  createBrand(data: BrandCreateInput!): Brand!
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateManyBrands(data: BrandUpdateManyMutationInput!, where: BrandWhereInput): BatchPayload!
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteManyBrands(where: BrandWhereInput): BatchPayload!
  createCollection(data: CollectionCreateInput!): Collection!
  updateCollection(data: CollectionUpdateInput!, where: CollectionWhereUniqueInput!): Collection
  updateManyCollections(data: CollectionUpdateManyMutationInput!, where: CollectionWhereInput): BatchPayload!
  upsertCollection(where: CollectionWhereUniqueInput!, create: CollectionCreateInput!, update: CollectionUpdateInput!): Collection!
  deleteCollection(where: CollectionWhereUniqueInput!): Collection
  deleteManyCollections(where: CollectionWhereInput): BatchPayload!
  createCollectionRule(data: CollectionRuleCreateInput!): CollectionRule!
  updateManyCollectionRules(data: CollectionRuleUpdateManyMutationInput!, where: CollectionRuleWhereInput): BatchPayload!
  deleteManyCollectionRules(where: CollectionRuleWhereInput): BatchPayload!
  createCollectionRuleSet(data: CollectionRuleSetCreateInput!): CollectionRuleSet!
  updateManyCollectionRuleSets(data: CollectionRuleSetUpdateManyMutationInput!, where: CollectionRuleSetWhereInput): BatchPayload!
  deleteManyCollectionRuleSets(where: CollectionRuleSetWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createOption(data: OptionCreateInput!): Option!
  updateOption(data: OptionUpdateInput!, where: OptionWhereUniqueInput!): Option
  updateManyOptions(data: OptionUpdateManyMutationInput!, where: OptionWhereInput): BatchPayload!
  upsertOption(where: OptionWhereUniqueInput!, create: OptionCreateInput!, update: OptionUpdateInput!): Option!
  deleteOption(where: OptionWhereUniqueInput!): Option
  deleteManyOptions(where: OptionWhereInput): BatchPayload!
  createOptionValue(data: OptionValueCreateInput!): OptionValue!
  updateOptionValue(data: OptionValueUpdateInput!, where: OptionValueWhereUniqueInput!): OptionValue
  updateManyOptionValues(data: OptionValueUpdateManyMutationInput!, where: OptionValueWhereInput): BatchPayload!
  upsertOptionValue(where: OptionValueWhereUniqueInput!, create: OptionValueCreateInput!, update: OptionValueUpdateInput!): OptionValue!
  deleteOptionValue(where: OptionValueWhereUniqueInput!): OptionValue
  deleteManyOptionValues(where: OptionValueWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductType(data: ProductTypeCreateInput!): ProductType!
  updateProductType(data: ProductTypeUpdateInput!, where: ProductTypeWhereUniqueInput!): ProductType
  updateManyProductTypes(data: ProductTypeUpdateManyMutationInput!, where: ProductTypeWhereInput): BatchPayload!
  upsertProductType(where: ProductTypeWhereUniqueInput!, create: ProductTypeCreateInput!, update: ProductTypeUpdateInput!): ProductType!
  deleteProductType(where: ProductTypeWhereUniqueInput!): ProductType
  deleteManyProductTypes(where: ProductTypeWhereInput): BatchPayload!
  createVariant(data: VariantCreateInput!): Variant!
  updateVariant(data: VariantUpdateInput!, where: VariantWhereUniqueInput!): Variant
  updateManyVariants(data: VariantUpdateManyMutationInput!, where: VariantWhereInput): BatchPayload!
  upsertVariant(where: VariantWhereUniqueInput!, create: VariantCreateInput!, update: VariantUpdateInput!): Variant!
  deleteVariant(where: VariantWhereUniqueInput!): Variant
  deleteManyVariants(where: VariantWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Option {
  id: ID!
  name: String!
  values(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue!]
}

type OptionConnection {
  pageInfo: PageInfo!
  edges: [OptionEdge]!
  aggregate: AggregateOption!
}

input OptionCreateInput {
  name: String!
  values: OptionValueCreateManyWithoutOptionInput
}

input OptionCreateOneWithoutValuesInput {
  create: OptionCreateWithoutValuesInput
  connect: OptionWhereUniqueInput
}

input OptionCreateWithoutValuesInput {
  name: String!
}

type OptionEdge {
  node: Option!
  cursor: String!
}

enum OptionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OptionPreviousValues {
  id: ID!
  name: String!
}

type OptionSubscriptionPayload {
  mutation: MutationType!
  node: Option
  updatedFields: [String!]
  previousValues: OptionPreviousValues
}

input OptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OptionWhereInput
  AND: [OptionSubscriptionWhereInput!]
  OR: [OptionSubscriptionWhereInput!]
  NOT: [OptionSubscriptionWhereInput!]
}

input OptionUpdateInput {
  name: String
  values: OptionValueUpdateManyWithoutOptionInput
}

input OptionUpdateManyMutationInput {
  name: String
}

input OptionUpdateOneRequiredWithoutValuesInput {
  create: OptionCreateWithoutValuesInput
  update: OptionUpdateWithoutValuesDataInput
  upsert: OptionUpsertWithoutValuesInput
  connect: OptionWhereUniqueInput
}

input OptionUpdateWithoutValuesDataInput {
  name: String
}

input OptionUpsertWithoutValuesInput {
  update: OptionUpdateWithoutValuesDataInput!
  create: OptionCreateWithoutValuesInput!
}

type OptionValue {
  id: ID!
  name: String!
  option: Option!
}

type OptionValueConnection {
  pageInfo: PageInfo!
  edges: [OptionValueEdge]!
  aggregate: AggregateOptionValue!
}

input OptionValueCreateInput {
  name: String!
  option: OptionCreateOneWithoutValuesInput!
}

input OptionValueCreateManyInput {
  create: [OptionValueCreateInput!]
  connect: [OptionValueWhereUniqueInput!]
}

input OptionValueCreateManyWithoutOptionInput {
  create: [OptionValueCreateWithoutOptionInput!]
  connect: [OptionValueWhereUniqueInput!]
}

input OptionValueCreateWithoutOptionInput {
  name: String!
}

type OptionValueEdge {
  node: OptionValue!
  cursor: String!
}

enum OptionValueOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OptionValuePreviousValues {
  id: ID!
  name: String!
}

input OptionValueScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [OptionValueScalarWhereInput!]
  OR: [OptionValueScalarWhereInput!]
  NOT: [OptionValueScalarWhereInput!]
}

type OptionValueSubscriptionPayload {
  mutation: MutationType!
  node: OptionValue
  updatedFields: [String!]
  previousValues: OptionValuePreviousValues
}

input OptionValueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OptionValueWhereInput
  AND: [OptionValueSubscriptionWhereInput!]
  OR: [OptionValueSubscriptionWhereInput!]
  NOT: [OptionValueSubscriptionWhereInput!]
}

input OptionValueUpdateDataInput {
  name: String
  option: OptionUpdateOneRequiredWithoutValuesInput
}

input OptionValueUpdateInput {
  name: String
  option: OptionUpdateOneRequiredWithoutValuesInput
}

input OptionValueUpdateManyDataInput {
  name: String
}

input OptionValueUpdateManyInput {
  create: [OptionValueCreateInput!]
  update: [OptionValueUpdateWithWhereUniqueNestedInput!]
  upsert: [OptionValueUpsertWithWhereUniqueNestedInput!]
  delete: [OptionValueWhereUniqueInput!]
  connect: [OptionValueWhereUniqueInput!]
  disconnect: [OptionValueWhereUniqueInput!]
  deleteMany: [OptionValueScalarWhereInput!]
  updateMany: [OptionValueUpdateManyWithWhereNestedInput!]
}

input OptionValueUpdateManyMutationInput {
  name: String
}

input OptionValueUpdateManyWithoutOptionInput {
  create: [OptionValueCreateWithoutOptionInput!]
  delete: [OptionValueWhereUniqueInput!]
  connect: [OptionValueWhereUniqueInput!]
  disconnect: [OptionValueWhereUniqueInput!]
  update: [OptionValueUpdateWithWhereUniqueWithoutOptionInput!]
  upsert: [OptionValueUpsertWithWhereUniqueWithoutOptionInput!]
  deleteMany: [OptionValueScalarWhereInput!]
  updateMany: [OptionValueUpdateManyWithWhereNestedInput!]
}

input OptionValueUpdateManyWithWhereNestedInput {
  where: OptionValueScalarWhereInput!
  data: OptionValueUpdateManyDataInput!
}

input OptionValueUpdateWithoutOptionDataInput {
  name: String
}

input OptionValueUpdateWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput!
  data: OptionValueUpdateDataInput!
}

input OptionValueUpdateWithWhereUniqueWithoutOptionInput {
  where: OptionValueWhereUniqueInput!
  data: OptionValueUpdateWithoutOptionDataInput!
}

input OptionValueUpsertWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput!
  update: OptionValueUpdateDataInput!
  create: OptionValueCreateInput!
}

input OptionValueUpsertWithWhereUniqueWithoutOptionInput {
  where: OptionValueWhereUniqueInput!
  update: OptionValueUpdateWithoutOptionDataInput!
  create: OptionValueCreateWithoutOptionInput!
}

input OptionValueWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  option: OptionWhereInput
  AND: [OptionValueWhereInput!]
  OR: [OptionValueWhereInput!]
  NOT: [OptionValueWhereInput!]
}

input OptionValueWhereUniqueInput {
  id: ID
}

input OptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  values_every: OptionValueWhereInput
  values_some: OptionValueWhereInput
  values_none: OptionValueWhereInput
  AND: [OptionWhereInput!]
  OR: [OptionWhereInput!]
  NOT: [OptionWhereInput!]
}

input OptionWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  brand: Brand!
  image: Image
  type: ProductType
  variants(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant!]
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection!]
  attributes(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  brand: BrandCreateOneWithoutProductsInput!
  image: ImageCreateOneInput
  type: ProductTypeCreateOneInput
  variants: VariantCreateManyInput
  collections: CollectionCreateManyWithoutProductsInput
  attributes: AttributeCreateManyWithoutProductsInput
}

input ProductCreateManyWithoutAttributesInput {
  create: [ProductCreateWithoutAttributesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutBrandInput {
  create: [ProductCreateWithoutBrandInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutCollectionsInput {
  create: [ProductCreateWithoutCollectionsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutAttributesInput {
  name: String!
  brand: BrandCreateOneWithoutProductsInput!
  image: ImageCreateOneInput
  type: ProductTypeCreateOneInput
  variants: VariantCreateManyInput
  collections: CollectionCreateManyWithoutProductsInput
}

input ProductCreateWithoutBrandInput {
  name: String!
  image: ImageCreateOneInput
  type: ProductTypeCreateOneInput
  variants: VariantCreateManyInput
  collections: CollectionCreateManyWithoutProductsInput
  attributes: AttributeCreateManyWithoutProductsInput
}

input ProductCreateWithoutCollectionsInput {
  name: String!
  brand: BrandCreateOneWithoutProductsInput!
  image: ImageCreateOneInput
  type: ProductTypeCreateOneInput
  variants: VariantCreateManyInput
  attributes: AttributeCreateManyWithoutProductsInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

type ProductType {
  id: ID!
  name: String!
}

type ProductTypeConnection {
  pageInfo: PageInfo!
  edges: [ProductTypeEdge]!
  aggregate: AggregateProductType!
}

input ProductTypeCreateInput {
  name: String!
}

input ProductTypeCreateOneInput {
  create: ProductTypeCreateInput
  connect: ProductTypeWhereUniqueInput
}

type ProductTypeEdge {
  node: ProductType!
  cursor: String!
}

enum ProductTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductTypePreviousValues {
  id: ID!
  name: String!
}

type ProductTypeSubscriptionPayload {
  mutation: MutationType!
  node: ProductType
  updatedFields: [String!]
  previousValues: ProductTypePreviousValues
}

input ProductTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductTypeWhereInput
  AND: [ProductTypeSubscriptionWhereInput!]
  OR: [ProductTypeSubscriptionWhereInput!]
  NOT: [ProductTypeSubscriptionWhereInput!]
}

input ProductTypeUpdateDataInput {
  name: String
}

input ProductTypeUpdateInput {
  name: String
}

input ProductTypeUpdateManyMutationInput {
  name: String
}

input ProductTypeUpdateOneInput {
  create: ProductTypeCreateInput
  update: ProductTypeUpdateDataInput
  upsert: ProductTypeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeUpsertNestedInput {
  update: ProductTypeUpdateDataInput!
  create: ProductTypeCreateInput!
}

input ProductTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProductTypeWhereInput!]
  OR: [ProductTypeWhereInput!]
  NOT: [ProductTypeWhereInput!]
}

input ProductTypeWhereUniqueInput {
  id: ID
}

input ProductUpdateInput {
  name: String
  brand: BrandUpdateOneRequiredWithoutProductsInput
  image: ImageUpdateOneInput
  type: ProductTypeUpdateOneInput
  variants: VariantUpdateManyInput
  collections: CollectionUpdateManyWithoutProductsInput
  attributes: AttributeUpdateManyWithoutProductsInput
}

input ProductUpdateManyDataInput {
  name: String
}

input ProductUpdateManyMutationInput {
  name: String
}

input ProductUpdateManyWithoutAttributesInput {
  create: [ProductCreateWithoutAttributesInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutAttributesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutAttributesInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithoutBrandInput {
  create: [ProductCreateWithoutBrandInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutBrandInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithoutCollectionsInput {
  create: [ProductCreateWithoutCollectionsInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCollectionsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCollectionsInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutAttributesDataInput {
  name: String
  brand: BrandUpdateOneRequiredWithoutProductsInput
  image: ImageUpdateOneInput
  type: ProductTypeUpdateOneInput
  variants: VariantUpdateManyInput
  collections: CollectionUpdateManyWithoutProductsInput
}

input ProductUpdateWithoutBrandDataInput {
  name: String
  image: ImageUpdateOneInput
  type: ProductTypeUpdateOneInput
  variants: VariantUpdateManyInput
  collections: CollectionUpdateManyWithoutProductsInput
  attributes: AttributeUpdateManyWithoutProductsInput
}

input ProductUpdateWithoutCollectionsDataInput {
  name: String
  brand: BrandUpdateOneRequiredWithoutProductsInput
  image: ImageUpdateOneInput
  type: ProductTypeUpdateOneInput
  variants: VariantUpdateManyInput
  attributes: AttributeUpdateManyWithoutProductsInput
}

input ProductUpdateWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutAttributesDataInput!
}

input ProductUpdateWithWhereUniqueWithoutBrandInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutBrandDataInput!
}

input ProductUpdateWithWhereUniqueWithoutCollectionsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCollectionsDataInput!
}

input ProductUpsertWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutAttributesDataInput!
  create: ProductCreateWithoutAttributesInput!
}

input ProductUpsertWithWhereUniqueWithoutBrandInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutBrandDataInput!
  create: ProductCreateWithoutBrandInput!
}

input ProductUpsertWithWhereUniqueWithoutCollectionsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCollectionsDataInput!
  create: ProductCreateWithoutCollectionsInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  brand: BrandWhereInput
  image: ImageWhereInput
  type: ProductTypeWhereInput
  variants_every: VariantWhereInput
  variants_some: VariantWhereInput
  variants_none: VariantWhereInput
  collections_every: CollectionWhereInput
  collections_some: CollectionWhereInput
  collections_none: CollectionWhereInput
  attributes_every: AttributeWhereInput
  attributes_some: AttributeWhereInput
  attributes_none: AttributeWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  attribute(where: AttributeWhereUniqueInput!): Attribute
  attributes(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute]!
  attributesConnection(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttributeConnection!
  brand(where: BrandWhereUniqueInput!): Brand
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  collection(where: CollectionWhereUniqueInput!): Collection
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection]!
  collectionsConnection(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionConnection!
  collectionRules(where: CollectionRuleWhereInput, orderBy: CollectionRuleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollectionRule]!
  collectionRulesConnection(where: CollectionRuleWhereInput, orderBy: CollectionRuleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionRuleConnection!
  collectionRuleSets(where: CollectionRuleSetWhereInput, orderBy: CollectionRuleSetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollectionRuleSet]!
  collectionRuleSetsConnection(where: CollectionRuleSetWhereInput, orderBy: CollectionRuleSetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionRuleSetConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  option(where: OptionWhereUniqueInput!): Option
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option]!
  optionsConnection(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionConnection!
  optionValue(where: OptionValueWhereUniqueInput!): OptionValue
  optionValues(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue]!
  optionValuesConnection(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionValueConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productType(where: ProductTypeWhereUniqueInput!): ProductType
  productTypes(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType]!
  productTypesConnection(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductTypeConnection!
  variant(where: VariantWhereUniqueInput!): Variant
  variants(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant]!
  variantsConnection(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VariantConnection!
  node(id: ID!): Node
}

type Subscription {
  attribute(where: AttributeSubscriptionWhereInput): AttributeSubscriptionPayload
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  collection(where: CollectionSubscriptionWhereInput): CollectionSubscriptionPayload
  collectionRule(where: CollectionRuleSubscriptionWhereInput): CollectionRuleSubscriptionPayload
  collectionRuleSet(where: CollectionRuleSetSubscriptionWhereInput): CollectionRuleSetSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  option(where: OptionSubscriptionWhereInput): OptionSubscriptionPayload
  optionValue(where: OptionValueSubscriptionWhereInput): OptionValueSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productType(where: ProductTypeSubscriptionWhereInput): ProductTypeSubscriptionPayload
  variant(where: VariantSubscriptionWhereInput): VariantSubscriptionPayload
}

type Variant {
  id: ID!
  optionValues(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue!]
  price: Int!
  availableForSale: Boolean
  sku: String
  image: Image
}

type VariantConnection {
  pageInfo: PageInfo!
  edges: [VariantEdge]!
  aggregate: AggregateVariant!
}

input VariantCreateInput {
  optionValues: OptionValueCreateManyInput
  price: Int!
  availableForSale: Boolean
  sku: String
  image: ImageCreateOneInput
}

input VariantCreateManyInput {
  create: [VariantCreateInput!]
  connect: [VariantWhereUniqueInput!]
}

type VariantEdge {
  node: Variant!
  cursor: String!
}

enum VariantOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  availableForSale_ASC
  availableForSale_DESC
  sku_ASC
  sku_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VariantPreviousValues {
  id: ID!
  price: Int!
  availableForSale: Boolean
  sku: String
}

input VariantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  availableForSale: Boolean
  availableForSale_not: Boolean
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  AND: [VariantScalarWhereInput!]
  OR: [VariantScalarWhereInput!]
  NOT: [VariantScalarWhereInput!]
}

type VariantSubscriptionPayload {
  mutation: MutationType!
  node: Variant
  updatedFields: [String!]
  previousValues: VariantPreviousValues
}

input VariantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VariantWhereInput
  AND: [VariantSubscriptionWhereInput!]
  OR: [VariantSubscriptionWhereInput!]
  NOT: [VariantSubscriptionWhereInput!]
}

input VariantUpdateDataInput {
  optionValues: OptionValueUpdateManyInput
  price: Int
  availableForSale: Boolean
  sku: String
  image: ImageUpdateOneInput
}

input VariantUpdateInput {
  optionValues: OptionValueUpdateManyInput
  price: Int
  availableForSale: Boolean
  sku: String
  image: ImageUpdateOneInput
}

input VariantUpdateManyDataInput {
  price: Int
  availableForSale: Boolean
  sku: String
}

input VariantUpdateManyInput {
  create: [VariantCreateInput!]
  update: [VariantUpdateWithWhereUniqueNestedInput!]
  upsert: [VariantUpsertWithWhereUniqueNestedInput!]
  delete: [VariantWhereUniqueInput!]
  connect: [VariantWhereUniqueInput!]
  disconnect: [VariantWhereUniqueInput!]
  deleteMany: [VariantScalarWhereInput!]
  updateMany: [VariantUpdateManyWithWhereNestedInput!]
}

input VariantUpdateManyMutationInput {
  price: Int
  availableForSale: Boolean
  sku: String
}

input VariantUpdateManyWithWhereNestedInput {
  where: VariantScalarWhereInput!
  data: VariantUpdateManyDataInput!
}

input VariantUpdateWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput!
  data: VariantUpdateDataInput!
}

input VariantUpsertWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput!
  update: VariantUpdateDataInput!
  create: VariantCreateInput!
}

input VariantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  optionValues_every: OptionValueWhereInput
  optionValues_some: OptionValueWhereInput
  optionValues_none: OptionValueWhereInput
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  availableForSale: Boolean
  availableForSale_not: Boolean
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  image: ImageWhereInput
  AND: [VariantWhereInput!]
  OR: [VariantWhereInput!]
  NOT: [VariantWhereInput!]
}

input VariantWhereUniqueInput {
  id: ID
}
`