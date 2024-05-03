import {Document} from 'sanity-io/client';

export type Movies = [Movie];

export type Movie = {
	_id: ID;
	_type: String;
	_createdAt: DateTime;
	_updatedAt: DateTime;
	_rev: String;
	_key: String;
	title: String;
	slug: Slug;
	overviewRaw: JSON;
	releaseDate: DateTime;
	poster: Image;
	externalId: Float;
	popularity: Float;
	castMembers: [CastMember];
	crewMembers: [CrewMember];
};

export type CastMember = {
	_key: String;
	_type: String;
	characterName: String;
	person: Person;
	externalId: Float;
	externalCreditId: String;
};

export type CrewMember = {
	_key: String;
	_type: String;
	department: String;
	job: String;
	person: Person;
	externalId: Float;
	externalCreditId: String;
};

export type Person = Implements<
	Document,
	{
		_id: ID;
		_type: String;
		_createdAt: DateTime;
		_updatedAt: DateTime;
		_rev: String;
		_key: String;
		name: String;
		slug: Slug;
		image: Image;
	}
>;

export type Image = {
	_key: String;
	_type: String;
	asset: SanityImageAsset;
	hotspot: SanityImageHotspot;
	crop: SanityImageCrop;
};

export type SanityImageAsset = Implements<
	Document,
	{
		_id: ID;
		_type: String;
		_createdAt: DateTime;
		_updatedAt: DateTime;
		_rev: String;
		_key: String;
		originalFilename: String;
		label: String;
		title: String;
		description: String;
		altText: String;
		sha1hash: String;
		extension: String;
		mimeType: String;
		size: Float;
		assetId: String;
		uploadId: String;
		path: String;
		url: String;
		metadata: SanityImageMetadata;
		source: SanityAssetSourceData;
	}
>;

export type SanityImageHotspot = {
	_key: String;
	_type: String;
	x: Float;
	y: Float;
	height: Float;
	width: Float;
};

export type SanityImageCrop = {
	_key: String;
	_type: String;
	top: Float;
	bottom: Float;
	left: Float;
	right: Float;
};

/**
 import {createClient, groq} from 'next-sanity';
import {gql} from '@apollo/client';

export async function getMovies() {
	const client = createClient({
		projectId: '6h85f463',
		dataset: 'production',
		apiVersion: '1',
	});

	return await client.fetch(`
	{
		allMovie(sort: { releaseDate: DESC }) {
			_id
			_createdAt
			_type
			_updatedAt
			_rev
			_key
			title
			slug {
				current
			}
			releaseDate
			poster {
				asset {
					originalFilename
					url
				}
			}
			popularity
			overviewRaw
			externalId
			castMembers{
				characterName
				person{
					name
					image{
						asset{
							originalFilename
							url
						}
					}
				}         
			}
		}
	}
`);
}

// groq`
// *[_type == "movie"] | order(releaseDate desc) {
//     _id,
//     title,
//     releaseDate,
//     poster,
//     "slug": slug.current
//     }
//     `
 */
