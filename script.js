let $fileExtension;

function displayCavab() {
  $firstName = document
    .getElementById('vm3cuxco')
    .elements.namedItem('fname').value;
  $lastName = document
    .getElementById('vm3cuxco')
    .elements.namedItem('lname').value;
  $studentId = document
    .getElementById('vm3cuxco')
    .elements.namedItem('studentId').value;
  $ImtahanNovu = document
    .getElementById('vm3cuxco')
    .elements.namedItem('ImtahanNovu').value;

  if ($ImtahanNovu == 'word') {
    $fileExtension = 'doc';
    $setLink =
      'https://view.officeapps.live.com/op/view.aspx?src=http://www.imtahanim.az/cavablar/';
  } else {
    $fileExtension = 'pdf';
    $setLink = 'http://www.imtahanim.az/cavablar/';
  }
  if (!$studentId) {
    alert('Kodu daxil edin');
    /* document.getElementById('displayLink').innerHTML = 'Kodu daxil edin'; */
  } else {
    window.open(
      $setLink + $ImtahanNovu + '/' + $studentId + '.' + $fileExtension
    );

    document.getElementById('displayLink').innerHTML =
      '<a href="' +
      $setLink +
      $ImtahanNovu +
      '/' +
      $studentId +
      '.' +
      $fileExtension +
      '">' +
      $studentId +
      '.' +
      $fileExtension +
      ' faylına keçid</a>';
  }
}
