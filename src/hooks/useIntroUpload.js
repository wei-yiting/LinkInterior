import { useEffect, useContext, useState } from 'react';
// import uuid from 'react-uuid';

import {
  usersCollection,
  serviceIntroCollection,
  servicesOverviewCollection,
  firebaseTimeStamp,
} from '../utils/firebase';
import { IntroCompileContext } from '../contexts/IntroCompileContext';
import { useAuth } from '../contexts/AuthContext';
import useIntroImageProcess from './useIntroImageProcess';

let serviceIntroUploadData;
let servicesOverviewUploadData;

export default function useIntroUpload(isPublished = true) {
  console.log('start useIntroUpload hook');
  // let uploadCollectionCount = 0;
  // let isUploading = true;
  const [isUploading, setIsUploading] = useState(true);
  const [isUploadingToDb, setIsUploadingToDb] = useState(false);
  // const [uploadError, setUploadError] = useState('');
  // const [uploadCollectionCount, setUploadCollectionCount] = useState(0);
  // const [isProcessingImages, setIsProcessingImages] = useState(false);
  // const [blocksWithImageCompressedUrl, setBlocksWithImageCompressedUrl] = useState([]);
  const { currentUser } = useAuth();
  const {
    templateType,
    intro,
    city,
    profession,
    introTags,
    contactInfo,
    selectedServiceCities,
    // blockList,
    // setIsProcessingImages,
    // isProcessingImages,
    // isProcessingBlockImage,
    // blocksWithImageCompressedUrl,
    // setBlocksWithImageCompressedUrl,
  } = useContext(IntroCompileContext);

  // setIsProcessingImages(true);

  const publishStatus = isPublished ? 2 : 1;

  // setBlocksWithImageCompressedUrl(
  //   blockList.map((block) => {
  //     return { id: uuid(), type: block.type, text: block.text };
  //   }),
  // );

  // let compressedHeroImageUrl = '';
  // let compressedImageGalleryUrls = '';

  useIntroImageProcess().then((resolveArray) => {
    if (isUploading && !isUploadingToDb) {
      const [compressedHeroImageUrl, compressedImageGalleryUrls] = resolveArray;
      serviceIntroUploadData = {
        companyName: currentUser.username,
        companySeqId: currentUser.userSeqId,
        lastEditTime: firebaseTimeStamp(),
        isPublished,
        templateContent: {
          contact: contactInfo,
          heroImageUrl: compressedHeroImageUrl,
          imagesGalleryURLs: compressedImageGalleryUrls,
          intro,
          introTags,
          location: city,
          profession,
          serviceArea: selectedServiceCities,
        },
        templateType,
        blocks: '',
      };
      servicesOverviewUploadData = {
        isPublished,
        lastEditTime: firebaseTimeStamp(),
        companyName: currentUser.username,
        profileUrl: currentUser.profileUrl,
        companySeqId: currentUser.userSeqId,
        intro,
        keywordTags: introTags,
        location: city,
        serviceArea: selectedServiceCities,
      };
      setIsUploadingToDb(true);
      console.log(serviceIntroUploadData);
      console.log(servicesOverviewUploadData);
    }
    // setIsProcessingImages(false);

    // }
    // });

    // useEffect(() => {
    //   setIsUploading(true);
    // }, []);

    // useEffect(() => {

    // }, [uploadCollectionCount]);
  });

  useEffect(() => {
    console.log('into useEffect');
    console.log('in userEffect', serviceIntroUploadData, servicesOverviewUploadData);
    // if (serviceIntroUploadData) {
    // }
    // if (servicesOverviewUploadData) {
    // }
    if (isUploading && isUploadingToDb && serviceIntroUploadData && servicesOverviewUploadData) {
      console.log('start upload to db');
      const dbPromises = [];
      const newServiceIntro = serviceIntroCollection
        .doc(currentUser.uid)
        .set(serviceIntroUploadData);
      // .then(() => {
      //   uploadCollectionCount += 1;
      //   console.log(uploadCollectionCount, 'count +1!');
      // })
      // .catch(() => {
      // setUploadError('上傳業者介紹專頁過程出現問題');
      // });
      dbPromises.push(newServiceIntro);
      const newServicesOverview = servicesOverviewCollection
        .doc(currentUser.uid)
        .set(servicesOverviewUploadData);
      // .then(() => {
      //   uploadCollectionCount += 1;
      //   console.log(uploadCollectionCount, 'count +1!');
      // })
      // .catch(() => {
      //   // setUploadError('上傳業者介紹專頁過程出現問題');
      // });
      dbPromises.push(newServicesOverview);
      const updateUserStatus = usersCollection.doc(currentUser.uid).update({ publishStatus });
      // .then(() => {
      //   uploadCollectionCount += 1;
      //   console.log(uploadCollectionCount, 'count +1!');
      // })
      // .catch(() => {
      //   console.log('user collection wrong!');
      //   // setUploadError('上傳業者介紹專頁過程出現問題');
      // });

      dbPromises.push(updateUserStatus);

      Promise.all(dbPromises).then(() => {
        console.log('all collection success!');
        setIsUploading(false);
      });
    }
    // if (uploadCollectionCount === 3) {
    // }
    // return () => {};
    // };
  }, [isUploadingToDb, serviceIntroUploadData, servicesOverviewUploadData]);

  return { isUploading };
}
