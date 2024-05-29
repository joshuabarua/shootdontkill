import {Document} from 'sanity-io/client';

export type Movies = [Movie];

export type Movie = {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_key: string;
	title: string;
	slug: Slug;
	overviewRaw: JSON;
	releaseDate: string;
	poster: Image;
	landscapeStill: Image;
	externalId: number;
	popularity: number;
	castMembers?: [CastMember];
	crewMembers?: [CrewMember];
};

export type Slug = {
	_key: String;
	_type: String;
	current: String;
	source: String;
};

export type CastMember = {
	_key: string;
	_type: string;
	characterName: string;
	person: Person;
	externalId: number;
	externalCreditId: string;
};

export type CrewMember = {
	_key: string;
	_type: string;
	department: string;
	job: string;
	person: Person;
	externalId: number;
	externalCreditId: string;
};

export type Person = Implements<
	Document,
	{
		_id: string;
		_type: string;
		_createdAt: string;
		_updatedAt: string;
		_rev: string;
		_key: string;
		name: string;
		slug: Slug;
		image: Image;
	}
>;

export type Image = {
	_key: string;
	_type: string;
	asset: SanityImageAsset;
	hotspot: SanityImageHotspot;
	crop: SanityImageCrop;
};

export type SanityImageAsset = Implements<
	Document,
	{
		_id: string;
		_type: string;
		_createdAt: string;
		_updatedAt: string;
		_rev: string;
		_key: string;
		originalFilename: string;
		label: string;
		title: string;
		description: string;
		altText: string;
		sha1hash: string;
		extension: string;
		mimeType: string;
		size: number;
		assetId: string;
		uploadId: string;
		path: string;
		url: string;
		metadata: SanityImageMetadata;
		source: SanityAssetSourceData;
	}
>;

export type SanityImageHotspot = {
	_key: string;
	_type: string;
	x: number;
	y: number;
	height: number;
	width: number;
};

export type SanityImageCrop = {
	_key: string;
	_type: string;
	top: number;
	bottom: number;
	left: number;
	right: number;
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
