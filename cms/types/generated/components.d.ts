import type { Schema, Struct } from '@strapi/strapi';

export interface FormForm extends Struct.ComponentSchema {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    ActionEndpoint: Schema.Attribute.String;
    Fields: Schema.Attribute.Component<'form.form-field', true>;
    SubmitButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormFormField extends Struct.ComponentSchema {
  collectionName: 'components_form_form_fields';
  info: {
    displayName: 'Form Field';
    icon: 'pencil';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    Required: Schema.Attribute.Boolean;
    Type: Schema.Attribute.String;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'dashboard';
  };
  attributes: {
    Form: Schema.Attribute.Component<'form.form', false>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Testimonials: Schema.Attribute.Component<
      'website-components.card-testimonial',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface WebsiteComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_website_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    class: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface WebsiteComponentsCardServices extends Struct.ComponentSchema {
  collectionName: 'components_website_components_card_services';
  info: {
    displayName: 'CardServices';
    icon: 'dashboard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Service: Schema.Attribute.String;
  };
}

export interface WebsiteComponentsCardTestimonial
  extends Struct.ComponentSchema {
  collectionName: 'components_website_components_card_testimonials';
  info: {
    displayName: 'CardTestimonial';
    icon: 'dashboard';
  };
  attributes: {
    Designation: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    ProfilePicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Rating: Schema.Attribute.Decimal;
    Testimonial: Schema.Attribute.Text;
  };
}

export interface WebsiteComponentsJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_website_components_jumbotrons';
  info: {
    displayName: 'Jumbotron';
    icon: 'picture';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'website-components.button', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WebsiteComponentsNavlink extends Struct.ComponentSchema {
  collectionName: 'components_website_components_navlinks';
  info: {
    displayName: 'Navlink';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface WebsiteComponentsNavlinkTree extends Struct.ComponentSchema {
  collectionName: 'components_website_components_navlink_trees';
  info: {
    displayName: 'NavlinkTree';
    icon: 'bulletList';
  };
  attributes: {
    children: Schema.Attribute.Component<'website-components.navlink', true>;
    parent: Schema.Attribute.Component<'website-components.navlink', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.form': FormForm;
      'form.form-field': FormFormField;
      'sections.contact-section': SectionsContactSection;
      'sections.testimonial-section': SectionsTestimonialSection;
      'website-components.button': WebsiteComponentsButton;
      'website-components.card-services': WebsiteComponentsCardServices;
      'website-components.card-testimonial': WebsiteComponentsCardTestimonial;
      'website-components.jumbotron': WebsiteComponentsJumbotron;
      'website-components.navlink': WebsiteComponentsNavlink;
      'website-components.navlink-tree': WebsiteComponentsNavlinkTree;
    }
  }
}
