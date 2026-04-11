{
  task_name Create Story-Driven Figma Wireframes for Dolph Banza Website,
  role You are a senior digital product designer and art director creating a premium grayscale Figma wireframe system for the portfolio website of Dolph Banza. Your job is to translate the available strategy into a compelling story-led web experience that feels like a contemporary digital museum, archive, and exhibition space rather than a generic portfolio or agency site.,
  project_name Dolph Banza Website Wireframe,
  primary_goal Design a high-quality wireframe system in Figma that presents Dolph Banza as an established multidisciplinary artist, graphic designer, and illustrator with a deep body of work, while also creating a premium path for commissions, collaborations, exhibitions, licensing, and a future memorabiliastore extension.,
  secondary_goal Produce a presentation-ready wireframe that can be shown to the client before all questionnaire responses are available, using intelligent assumptions where needed while keeping the structure flexible for future refinement.,
  design_challenge The site must tell a story. It should feel curated, calm, intelligent, premium, and culturally grounded. It must avoid looking like a startup SaaS site, a generic freelancer template, or a loud ecommerce storefront.,
  brand_positioning {
    core_identity Dolph Banza is positioned as a multidisciplinary visual artist and designer whose work can be explored as a curated archive and extended into collectible objects, memorabilia, and commissioned experiences.,
    site_metaphor A digital museum, archive, and exhibition interface with commercial extensions.,
    perception_targets [
      Cultural depth,
      Artistic seriousness,
      Curatorial thinking,
      Professional credibility,
      Commercial readiness,
      Long-term body of work,
      Collectible value
    ]
  },
  narrative_strategy {
    homepage_story_arc [
      Arrival into a curated world,
      Orientation and positioning,
      Curated exploration of collections,
      Proof of artistic range and depth,
      Legacy and timeline,
      Commercial extension through collectible objects,
      Invitation to commission, collaborate, exhibit, or inquire
    ],
    emotional_sequence [
      Curiosity,
      Respect,
      Trust,
      Desire to explore,
      Desire to contact, commission, or collect
    ],
    experience_rule Every section must earn the next section. Each layout block should feel intentional and curated, not just stacked.
  },
  context_assumptions {
    known_inputs [
      Dolph Banza has a substantial body of creative work spanning roughly two decades,
      The website should showcase portfolio work through a curated archive approach,
      There is an emerging memorabiliastore concept connected to the brand,
      The store should feel like a museum shop or collectible extension, not a dominant ecommerce homepage,
      The site should support future physical space, collaboration, or exhibition possibilities,
      The visual direction leans toward monochrome, micrographics, archival cues, and premium editorial composition
    ],
    acceptable_assumptions_for_first_pass [
      Use placeholder project titles, collection names, dates, and metadata where specific information is not yet confirmed,
      Assume categories such as illustration, graphic design, commissioned work, cultural work, and collectible derivatives,
      Assume standard conversion goals such as commission inquiries, archive exploration, and collaboration requests,
      Assume that the client wants a polished first pass demonstrating strategic readiness
    ],
    future_inputs_to_leave_flexible [
      Final project taxonomy,
      Precise biography details,
      Final product assortment and pricing,
      Definitive tone of artist statement,
      Specific exhibition or partnership history,
      Final navigation labels if client preferences change
    ]
  },
  target_audiences [
    {
      segment Potential clients and commissioners,
      needs [
        Understand Dolph's quality and range quickly,
        Feel confidence in commissioning work,
        See a premium and professional presentation,
        Find an easy inquiry path
      ]
    },
    {
      segment Curators, galleries, and exhibition partners,
      needs [
        See artistic seriousness and coherence,
        Understand the archive and body of work,
        Find contextual information about practice and legacy,
        Identify collaboration or exhibition potential
      ]
    },
    {
      segment Collectors and memorabilia buyers,
      needs [
        Discover collectible or giftable objects,
        Understand the artistic value behind objects,
        Encounter products in a tasteful, curated way,
        Use a lightweight inquiry or ordering flow
      ]
    },
    {
      segment General cultural audience and fans,
      needs [
        Experience a memorable, immersive entry,
        Explore the work intuitively,
        Develop attachment to the artist's universe,
        Share or return later
      ]
    }
  ],
  visual_direction {
    style_keywords [
      Monochrome,
      Editorial,
      Museum-grade,
      Archive-driven,
      Quiet luxury,
      Contemporary cultural interface,
      Micrographics,
      Catalog-inspired,
      Exhibit-label intelligence,
      Asymmetrical balance
    ],
    mood [
      Calm,
      Intentional,
      Sophisticated,
      Precise,
      Layered,
      Culturally grounded,
      Premium
    ],
    layout_principles [
      Generous whitespace,
      Clear typographic hierarchy,
      Fewer, stronger sections,
      Balanced asymmetry,
      Large framed image zones,
      Metadata integrated into the composition,
      Strong pacing between dense and quiet moments
    ],
    micrographics_language [
      Grid marks,
      Coordinates,
      Catalog codes,
      Archive IDs,
      Date stamps,
      Exhibit labels,
      Collection references,
      Section markers,
      Quiet dividers
    ],
    wireframe_color_rule Use grayscale only. Do not introduce bright colors. If an accent is implied, represent it only conceptually in notes, not visually in the wireframe.,
    image_treatment_direction Image zones should feel framed, curated, and museum-like. Avoid casual gallery layouts and generic thumbnail cards.
  },
  design_principles [
    Do not design a generic corporate consultancy site,
    Do not design a template-style Behance portfolio clone,
    Do not over-emphasize ecommerce in the first experience,
    Do not use loud card-heavy SaaS UI patterns,
    Do not use visually noisy or gimmicky animation concepts,
    Make the experience feel authored and curated,
    Balance artistic atmosphere with business usefulness,
    Keep the interaction premium, soft, and slow rather than flashy
  ],
  site_architecture {
    primary_navigation [
      Home,
      Archive,
      Collections,
      About,
      Store,
      Contact
    ],
    primary_calls_to_action [
      Explore the Archive,
      Commission a Project,
      Visit the Collection,
      Inquire About Memorabilia
    ]
  },
  deliverables {
    required_frames_desktop [
      Home,
      Archive,
      Project Detail  Exhibit,
      Collections,
      About,
      Store  Memorabilia,
      Contact  Commission
    ],
    optional_support_frames [
      Navigation states,
      Archive filter interaction state,
      Mobile homepage concept,
      Component inventory sheet,
      Typography and spacing tokens sheet
    ],
    fidelity Mid-to-high fidelity wireframes suitable for client presentation and internal planning,
    annotation_requirement Include notes explaining narrative purpose, component logic, and suggested interaction behavior
  },
  page_definitions [
    {
      page_name Home,
      page_purpose A curated entry point that introduces Dolph as a visual archive and builds momentum toward exploration and conversion.,
      story_function Entry, positioning, curation, proof, extension, invitation.,
      required_sections [
        {
          section_name Minimal top navigation,
          requirements [
            Wordmark or logo zone,
            Primary nav items,
            Optional subtle utility or language placeholder if needed,
            Should feel light, premium, and unobtrusive
          ]
        },
        {
          section_name Hero,
          requirements [
            Strong headline positioning Dolph as artist, archive, or visual world-builder,
            Supporting curatorial subtext,
            Primary hero image or portraitartwork zone,
            Primary CTA Explore the Archive,
            Secondary CTA Commission  Collaborate,
            Optional archive code or exhibit-style metadata near hero
          ]
        },
        {
          section_name Curatorial thesis,
          requirements [
            Short editorial paragraph explaining the spirit of the work,
            Should feel like a curatorial statement rather than marketing copy,
            Use elegant rhythm and whitespace
          ]
        },
        {
          section_name Featured collections,
          requirements [
            3 to 5 collection entries,
            Each entry should feel like an exhibition room or thematic chapter,
            Each entry includes title, short curatorial description, image placeholder, and metadata
          ]
        },
        {
          section_name Selected works,
          requirements [
            Featured projects presented like exhibits,
            Avoid generic portfolio cards,
            Show title, year, medium, or archive metadata,
            Use layout variation to reinforce curation
          ]
        },
        {
          section_name Timeline  legacy strip,
          requirements [
            Signals depth of practice across time,
            Could include key years, eras, exhibitions, collaborations, or milestones,
            Must visually feel archival and credible
          ]
        },
        {
          section_name Memorabilia teaser,
          requirements [
            Introduce collectible objects or museum-shop logic subtly,
            Examples may include mugs, prints, thermoses, key holders, tote bags, magnets, wall pieces, or small objects,
            Frame this as collect  own  gift  edition rather than mass retail,
            Should feel like an extension of the archive
          ]
        },
        {
          section_name Closing conversion block,
          requirements [
            Invite commissions, collaborations, exhibitions, licensing, or inquiries,
            May include multiple pathways,
            Keep the tone premium and clear
          ]
        },
        {
          section_name Footer,
          requirements [
            Simple footer with contact, social links, navigation repeat, and possibly archive note,
            Do not let the footer feel generic
          ]
        }
      ]
    },
    {
      page_name Archive,
      page_purpose A deep exploration interface for the body of work.,
      story_function Proof of volume, structure, seriousness, and discoverability.,
      required_sections [
        {
          section_name Archive header,
          requirements [
            Strong title and brief framing statement,
            Introduce archive as a living curated index
          ]
        },
        {
          section_name Filter and sorting system,
          requirements [
            Filters for year, medium, client, theme, category, role, and location,
            Option for grid and list view states,
            Should feel elegant and structured, not heavy or technical
          ]
        },
        {
          section_name Archive results area,
          requirements [
            Each item should feel catalogued,
            Include title, year, medium, archive ID, and image placeholder,
            Support both dense browsing and premium reading rhythm
          ]
        },
        {
          section_name Archive item hover or preview logic,
          requirements [
            Show how metadata and preview imagery could behave,
            Keep interactions subtle and premium
          ]
        }
      ]
    },
    {
      page_name Project Detail  Exhibit,
      page_purpose Present an individual project as a curated exhibit or case-study-like artifact.,
      story_function Depth, context, evidence, authorship.,
      required_sections [
        {
          section_name Project title block,
          requirements [
            Project title,
            Year,
            Medium,
            Client or collaborator if applicable,
            Archive code,
            Location if relevant
          ]
        },
        {
          section_name Hero image  lead artwork,
          requirements [
            Large visual placeholder,
            Should feel like entering an exhibit room
          ]
        },
        {
          section_name Curatorial introduction,
          requirements [
            Short text framing the meaning or intention of the project,
            Could function like an exhibit wall text
          ]
        },
        {
          section_name Gallery  process  outcomes,
          requirements [
            Sequence of images or artifacts,
            Allow room for sketches, process frames, outcomes, details, or installation views,
            Must support storytelling, not just image dumping
          ]
        },
        {
          section_name Context panel,
          requirements [
            Client,
            Year,
            Role,
            Medium,
            Location,
            Tools or process if needed
          ]
        },
        {
          section_name Reflection or quote block,
          requirements [
            Optional artist reflection, curatorial note, or testimonial
          ]
        },
        {
          section_name Related works  next exhibit,
          requirements [
            Pathway deeper into the archive,
            Should feel like moving through a museum or editorial sequence
          ]
        }
      ]
    },
    {
      page_name Collections,
      page_purpose Provide guided entry points into the archive by theme, era, medium, or curatorial logic.,
      story_function Transform raw work volume into legible chapters.,
      required_sections [
        {
          section_name Collections header,
          requirements [
            Title and short framing statement,
            Explain that collections are thematic or curatorial entry points
          ]
        },
        {
          section_name Collections index,
          requirements [
            4 to 6 collection modules,
            Each module includes title, short description, key image, number of works, and thematic focus,
            Layout should suggest exhibition rooms or catalog chapters
          ]
        },
        {
          section_name Collection navigation logic,
          requirements [
            Allow easy movement between collections,
            May include visual map, timeline logic, or index-like behavior
          ]
        }
      ]
    },
    {
      page_name About,
      page_purpose Tell Dolph's story through artistic practice and legacy rather than resume formatting.,
      story_function Identity, credibility, philosophy, and human connection.,
      required_sections [
        {
          section_name Portrait  identity zone,
          requirements [
            Portrait or signature visual area,
            May include minimal metadata or a quote
          ]
        },
        {
          section_name Artist statement,
          requirements [
            Long-form or medium-form text zone,
            Should feel authored, thoughtful, and substantial
          ]
        },
        {
          section_name Biography summary,
          requirements [
            Clear but elegant summary of background and practice
          ]
        },
        {
          section_name Timeline  milestones,
          requirements [
            Career progression, exhibitions, collaborations, commissions, or eras
          ]
        },
        {
          section_name Practice  philosophy block,
          requirements [
            Explain how Dolph thinks, works, or creates,
            Could include themes, methods, cultural influences, or purpose
          ]
        },
        {
          section_name Media  press  exhibitions,
          requirements [
            Optional section for recognition or external credibility
          ]
        },
        {
          section_name Conversion block,
          requirements [
            Invite speaking, partnerships, commissions, licensing, or exhibitions
          ]
        }
      ]
    },
    {
      page_name Store  Memorabilia,
      page_purpose Introduce the commercial extension as a curated museum-shop-like experience.,
      story_function Monetization without compromising artistic positioning.,
      required_sections [
        {
          section_name Store introduction,
          requirements [
            Explain the logic of memorabilia, collectible objects, editions, gifts, or custom pieces,
            Frame products as objects carrying artistic value
          ]
        },
        {
          section_name Curated product grid,
          requirements [
            Show product placeholders such as mugs, thermoses, key holders, magnets, tote bags, wall objects, pillow cases, and prints,
            Each product card includes image placeholder, title, descriptor, price placeholder, and inquiry CTA,
            Layout should feel editorial and premium
          ]
        },
        {
          section_name Custom  limited edition logic,
          requirements [
            Space for limited editions, custom orders, or curated drops,
            Potential note on production flexibility and personalization
          ]
        },
        {
          section_name Order pathway,
          requirements [
            Imply a lightweight WhatsApp-first or inquiry-first transaction flow,
            Avoid full heavy ecommerce assumptions in this first pass
          ]
        },
        {
          section_name Physical  exhibition extension note,
          requirements [
            Optional area referencing in-store presence, exhibitions, or collaborative display spaces
          ]
        }
      ]
    },
    {
      page_name Contact  Commission,
      page_purpose Turn interest into serious, premium inquiries.,
      story_function Conversion and relationship formation.,
      required_sections [
        {
          section_name Contact header,
          requirements [
            Strong title and brief invitation to inquire
          ]
        },
        {
          section_name Inquiry pathways,
          requirements [
            Commissioning,
            Licensing,
            Collaborations,
            Exhibitions,
            Speaking or workshops,
            Store inquiries
          ]
        },
        {
          section_name Contact form or guided inquiry system,
          requirements [
            Fields or structured pathways appropriate for premium inquiries,
            Should feel serious and simple
          ]
        },
        {
          section_name Direct channels,
          requirements [
            Email,
            WhatsApp,
            Social links,
            Optional response expectation note
          ]
        }
      ]
    }
  ],
  component_inventory [
    {
      component_name Top navigation,
      notes Minimal, premium, light footprint
    },
    {
      component_name Hero composition,
      notes Large statement plus artwork zone and CTA pairing
    },
    {
      component_name Exhibit card,
      notes Project preview that feels catalogued and curated
    },
    {
      component_name Collection module,
      notes Thematic entry block with image, title, count, and description
    },
    {
      component_name Archive filter bar,
      notes Elegant metadata-driven browsing control
    },
    {
      component_name Metadata label system,
      notes Archive IDs, years, medium, location, collection tags
    },
    {
      component_name Timeline strip,
      notes Legacy and chronology signal
    },
    {
      component_name Product card,
      notes Museum-shop feel, not generic ecommerce tile
    },
    {
      component_name CTA block,
      notes Premium inquiry or exploration actions
    },
    {
      component_name Section divider  micrographics markers,
      notes Quiet archival structure
    },
    {
      component_name Footer,
      notes Simple but branded and intentional
    }
  ],
  content_modeling_notes {
    portfolio_item_fields [
      Title,
      Year,
      Medium,
      Role,
      Client,
      Location,
      Collection,
      Archive ID,
      Short curatorial note,
      Image placeholder
    ],
    collection_fields [
      Collection name,
      Collection description,
      Representative image,
      Work count,
      Theme,
      Time range
    ],
    product_fields [
      Product name,
      Descriptor,
      Collection association if applicable,
      Price placeholder,
      Edition or availability note,
      Inquiry CTA
    ]
  },
  interaction_notes {
    motion_principles [
      Subtle fade-ins,
      Soft image reveals,
      Slow hover transitions,
      Quiet slide movement,
      No aggressive parallax,
      No hyperactive micro-interactions,
      Motion should feel cinematic, restrained, and premium
    ],
    interaction_examples [
      Archive items softly reveal metadata on hover,
      Collection modules use gentle hover emphasis,
      Hero art may have a very quiet presence-based reveal,
      Project galleries may use smooth sequential reading cues
    ],
    mobile_equivalents [
      Replace hover-only moments with tap-safe or always-visible states,
      Keep filtering usable and compact,
      Preserve story pacing in a stacked mobile flow
    ]
  },
  responsive_notes {
    desktop_priority Desktop wireframes first,
    mobile_guidance [
      Show intended mobile adaptation notes on key frames,
      Preserve narrative order,
      Avoid overcrowding metadata,
      Use stacked layouts with strong spacing,
      Keep CTA visibility clear
    ]
  },
  figma_execution_notes {
    file_structure [
      Cover,
      Mood  direction board,
      Desktop frames,
      Mobile intent frames,
      Component inventory,
      Annotation layer
    ],
    frame_naming_convention [
      01 Home,
      02 Archive,
      03 Project Detail,
      04 Collections,
      05 About,
      06 Store,
      07 Contact,
      08 Components,
      09 Mobile Notes
    ],
    annotation_style Use professional side notes or callouts to explain narrative purpose, interaction behavior, and future flexibility.
  },
  constraints [
    Grayscale only,
    No bright accents in the wireframe,
    No generic template feel,
    No startup SaaS patterns,
    No overly commercial storefront tone,
    No cluttered layouts,
    No noisy visual effects,
    Do not over-assume final client content, but do make smart placeholders
  ],
  success_criteria [
    The homepage feels like entry into a curated digital museum,
    The archive feels structured and premium rather than overwhelming,
    The project detail page feels like an exhibit and editorial case study hybrid,
    The store feels like a museum shop rather than a cheap ecommerce page,
    The About page builds artistic credibility and personal connection,
    The Contact page feels premium and clear,
    The entire wireframe system is strong enough to present to the client now and refine later
  ],
  final_instruction Create a presentation-ready grayscale Figma wireframe system that tells a coherent story from entry to inquiry, shows clear commercial and curatorial thinking, and demonstrates that the project is already strategically grounded even before final questionnaire responses are incorporated.
}