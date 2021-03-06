import { useEffect, useContext, useState } from 'react';

import {
  usersCollection,
  serviceIntroCollection,
  servicesOverviewCollection,
  firebaseTimeStamp,
} from '../utils/firebase';
import { IntroCompileContext } from '../contexts/IntroCompileContext';
import { useAuth } from '../contexts/AuthContext';
import templateImagesProcess from '../utils/imageProcess/templateImagesProcess';
import blockImagesProcess from '../utils/imageProcess/blockImagesProcess';
import addHttp from '../utils/functions/urlProcess';

let serviceIntroUploadData;
let servicesOverviewUploadData;

export default function useIntroUpload(isPublished) {
  const [isUploading, setIsUploading] = useState(true);
  const [isUploadingToDb, setIsUploadingToDb] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const { currentUser } = useAuth();
  const {
    templateType,
    intro,
    city,
    profession,
    introTags,
    contactInfo,
    selectedServiceCities,
    selectedHeroImage,
    selectedGalleryImages,
    blockList,
  } = useContext(IntroCompileContext);

  const publishStatus = isPublished ? 2 : 1;
  const isPublishing = isPublished === 'true';

  // handle url, add "http"
  let { website, fb, ig } = contactInfo;
  const { mobile, phone, line, email, address } = contactInfo;
  website = website ? addHttp(website) : '';
  fb = fb ? addHttp(fb) : '';
  ig = ig ? addHttp(ig) : '';
  const contactInfoWithHttpUrl = { mobile, phone, line, email, address, website, fb, ig };

  templateImagesProcess(selectedHeroImage, selectedGalleryImages)
    .then((resolveArray) => {
      if (isUploading && !isUploadingToDb) {
        blockImagesProcess(blockList)
          .then((result) => {
            const blocksWithImageCompressedUrl = result;
            const [compressedHeroImageUrl, compressedImageGalleryUrls] = resolveArray;
            serviceIntroUploadData = {
              companyName: currentUser.username,
              companySeqId: currentUser.userSeqId,
              lastEditTime: firebaseTimeStamp(),
              isPublished: isPublishing,
              templateContent: {
                contact: contactInfoWithHttpUrl,
                heroImageUrl: compressedHeroImageUrl,
                imageGalleryUrls: compressedImageGalleryUrls,
                intro,
                introTags,
                location: city.name,
                profession: profession.name,
                serviceArea: selectedServiceCities,
              },
              templateType,
              blocks: blocksWithImageCompressedUrl,
            };
            servicesOverviewUploadData = {
              isPublished: isPublishing,
              lastEditTime: firebaseTimeStamp(),
              companyName: currentUser.username,
              profileUrl: currentUser.profileUrl,
              companySeqId: currentUser.userSeqId,
              intro,
              keywordTags: introTags,
              location: city.name,
              serviceArea: selectedServiceCities,
              profession: profession.name,
            };
            setIsUploadingToDb(true);
          })
          .catch(() => {
            setUploadError('????????????????????????????????????');
          });
      }
    })
    .catch(() => {
      setUploadError('????????????????????????????????????');
    });

  useEffect(() => {
    if (isUploading && isUploadingToDb) {
      const dbPromises = [];
      const newServiceIntro = serviceIntroCollection
        .doc(currentUser.userUid)
        .set(serviceIntroUploadData);
      dbPromises.push(newServiceIntro);

      const newServicesOverview = servicesOverviewCollection
        .doc(currentUser.userUid)
        .set(servicesOverviewUploadData);
      dbPromises.push(newServicesOverview);

      const updateUserStatus = usersCollection.doc(currentUser.userUid).update({ publishStatus });
      dbPromises.push(updateUserStatus);

      Promise.all(dbPromises)
        .then(() => {
          setIsUploading(false);
        })
        .catch(() => {
          setUploadError('????????????????????????????????????????????????');
        });
    }
  }, [isUploadingToDb]);

  return { isUploading, uploadError };
}
