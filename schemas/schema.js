// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'number',
          type: 'string',
          title: 'Feature Number'
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug'
          // validation: Rule => Rule.required()
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle'
        },
        {
          name: 'projectIntro',
          type: 'string',
          title: 'Project Introduction'
        },
        {
          name: 'projectRole',
          title: 'Project Role',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'blogMainIntro',
          title: 'Blog Main Introduction',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'featuredImage',
          type: 'image',
          title: 'Featured Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'description'
            }
          ]
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Center', value: 'center'},
                      {title: 'Left', value: 'left'},
                      {title: 'Right', value: 'right'},
                    ],
                    layout: 'radio',
                    isHighlighted: true
                  }
                },
                {
                  type: 'text',
                  name: 'alt',
                  title: 'description',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
              }
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ]
        },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date'
          // validation: Rule => Rule.required()
        }
      ],
    }
  ])
});
