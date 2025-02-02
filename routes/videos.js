const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const validateVideo = require('../validators/validateVideo');
const validateVideoDetails = require('../validators/validateVideoDetails');
const isAuth = require('../helpers/isAuth');

router.post('/save-video-token', isAuth, videoController.saveVideoToken);
router.put('/update-streaming-participants-count', isAuth, videoController.updateParticipantsCount);
router.post('/save-video-data', isAuth, videoController.saveVideoData);
router.post('/save-video-thumbnail', isAuth, uploadVideoThumbFile, videoController.saveVideoThumbnail);
router.delete('/remove-video-thumbnail', isAuth, uploadVideoThumbFile, videoController.removeVideoThumbnail);
// router.post('/save-video-message', uploadVideoStreamFile, videoController.saveVideoMessage);
router.get('/get-user-videos', isAuth, videoController.getUserVideos);
router.get('/get-categories', videoController.getCategories);
router.get('/get-video-by-id', videoController.getVideoById);
router.get('/get-videos-by-author', isAuth, videoController.getVideosByAuthor);
router.get('/get-user-tags', isAuth, videoController.getUserTags);
router.get('/get-all-tags', videoController.getVideoTags);
router.get('/search-in-videos-by-author', videoController.getVideosByAuthor);
router.get('/search-in-user-videos', videoController.getUserVideos);
router.get('/search-in-all-videos', videoController.searchInAllVideos);
router.get('/get', videoController.getVideos);
router.get('/get-saved', videoController.getUserSavedVideos);
router.put('/update-likes', isAuth, videoController.updateLikes);
router.put('/update-comment-likes', isAuth, videoController.updateCommentLikes);
router.put('/update-privacy', isAuth, videoController.updatePrivacy);
router.put('/update-privacy-status', isAuth, videoController.updatePrivacyStatus)
router.put('/update-views', isAuth, videoController.updateViews);
router.put('/index-user-tags', isAuth, videoController.updateUserTags);
router.put('/save-video', isAuth, videoController.saveVideo);
router.put('/save-video-details', isAuth, uploadVideoThumbFile,validateVideoDetails.rules, videoController.saveVideoDetails);
router.delete('/remove', isAuth, uploadVideoThumbFile, videoController.removeVideo);
router.delete('/remove-by-token', isAuth, uploadVideoThumbFile, videoController.removeVideo);
router.post('/add-comment', isAuth, videoController.addCommentForVideo);
router.put('/update-comment', isAuth, videoController.updateVideoComment);
router.get('/get-comments', isAuth, videoController.getVideoComments);
router.delete('/remove-comment', isAuth, videoController.removeVideoComment);

router.post('/list', videoController.getVideosList)

module.exports = router;
