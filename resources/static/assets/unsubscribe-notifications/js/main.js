document.addEventListener("DOMContentLoaded", function() {
  setMainSettings(document.querySelector('#notify_by_email').checked, true)
  setAdditionalSettings(document.querySelector('#flow_change_notify').checked, true)
  document.querySelector('#notify_by_email').addEventListener('change', (e) => setMainSettings(e.target.checked))
  document.querySelector('#flow_change_notify').addEventListener('change', (e) => setAdditionalSettings(e.target.checked))
})

function setMainSettings(checked, isFirstSetting = false) {
  if (!checked) {
    document.querySelectorAll('input:not(#notify_by_email):not(#daily_notify)').forEach(elem => {
      elem.disabled = true
      elem.checked = false
    })
  } else {
    document.querySelectorAll('input[type=checkbox]:not(#notify_by_email):not(#daily_notify)').forEach(e => {
      e.disabled = false
      if (!isFirstSetting) e.checked = true
    })
    document.querySelectorAll('input[type=radio]').forEach(e => {
      e.disabled = false
      if (!isFirstSetting) e.checked = e.id === 'any_changes'
    })
  }
}

function setAdditionalSettings(checked, isFirstSetting = false) {
  document.querySelectorAll('input[type=radio]').forEach(e => {
    e.disabled = !checked
    if (!isFirstSetting) e.checked = checked ? e.id === 'any_changes' : checked
  })
}

function submitWithDisabledFields() {
  document.querySelector('#notify_by_email').checked = false
  setMainSettings(false)
  document.querySelector('#settings_form').submit()
}
